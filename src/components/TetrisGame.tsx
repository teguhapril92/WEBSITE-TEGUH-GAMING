import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X } from 'lucide-react';

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

const TETROMINOS = {
  I: { shape: [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]], color: 'bg-cyan-400' },
  J: { shape: [[1,0,0],[1,1,1],[0,0,0]], color: 'bg-blue-500' },
  L: { shape: [[0,0,1],[1,1,1],[0,0,0]], color: 'bg-orange-500' },
  O: { shape: [[1,1],[1,1]], color: 'bg-yellow-400' },
  S: { shape: [[0,1,1],[1,1,0],[0,0,0]], color: 'bg-green-500' },
  T: { shape: [[0,1,0],[1,1,1],[0,0,0]], color: 'bg-purple-500' },
  Z: { shape: [[1,1,0],[0,1,1],[0,0,0]], color: 'bg-red-500' },
};

const randomTetromino = () => {
  const keys = Object.keys(TETROMINOS);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return { type: randKey, ...TETROMINOS[randKey as keyof typeof TETROMINOS] };
};

const createEmptyBoard = () => Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(null));

export default function TetrisGame({ onClose }: { onClose: () => void }) {
  const [board, setBoard] = useState(createEmptyBoard());
  const [piece, setPiece] = useState<{shape: number[][], color: string, x: number, y: number} | null>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const pieceRef = useRef(piece);
  const boardRef = useRef(board);
  const isPlayingRef = useRef(isPlaying);

  useEffect(() => { pieceRef.current = piece; }, [piece]);
  useEffect(() => { boardRef.current = board; }, [board]);
  useEffect(() => { isPlayingRef.current = isPlaying; }, [isPlaying]);

  const checkCollision = (p = pieceRef.current, b = boardRef.current, moveX = 0, moveY = 0) => {
    if (!p) return false;
    for (let y = 0; y < p.shape.length; y++) {
      for (let x = 0; x < p.shape[y].length; x++) {
        if (p.shape[y][x] !== 0) {
          const newX = p.x + x + moveX;
          const newY = p.y + y + moveY;
          if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT || (newY >= 0 && b[newY][newX] !== null)) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const lockPiece = useCallback(() => {
    const p = pieceRef.current;
    const b = boardRef.current;
    if (!p) return;

    const newBoard = b.map(row => [...row]);
    let isGameOver = false;

    p.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          if (p.y + y < 0) {
            isGameOver = true;
          } else {
            newBoard[p.y + y][p.x + x] = p.color;
          }
        }
      });
    });

    if (isGameOver) {
      setGameOver(true);
      setIsPlaying(false);
      return;
    }

    let linesCleared = 0;
    const finalBoard = newBoard.filter(row => {
      const isFull = row.every(cell => cell !== null);
      if (isFull) linesCleared++;
      return !isFull;
    });

    while (finalBoard.length < BOARD_HEIGHT) {
      finalBoard.unshift(Array(BOARD_WIDTH).fill(null));
    }

    if (linesCleared > 0) {
      setScore(s => s + [0, 100, 300, 500, 800][linesCleared]);
    }

    setBoard(finalBoard);
    spawnPiece();
  }, []);

  const spawnPiece = useCallback(() => {
    const newPiece = randomTetromino();
    const p = {
      shape: newPiece.shape,
      color: newPiece.color,
      x: Math.floor(BOARD_WIDTH / 2) - Math.floor(newPiece.shape[0].length / 2),
      y: 0
    };
    setPiece(p);
    pieceRef.current = p;
    if (checkCollision(p, boardRef.current, 0, 0)) {
      setGameOver(true);
      setIsPlaying(false);
    }
  }, []);

  const moveDown = useCallback(() => {
    if (!isPlayingRef.current || gameOver) return;
    if (!checkCollision(pieceRef.current, boardRef.current, 0, 1)) {
      setPiece(prev => prev ? { ...prev, y: prev.y + 1 } : null);
    } else {
      lockPiece();
    }
  }, [gameOver, lockPiece]);

  const moveHorizontal = useCallback((dir: number) => {
    if (!isPlayingRef.current || gameOver) return;
    if (!checkCollision(pieceRef.current, boardRef.current, dir, 0)) {
      setPiece(prev => prev ? { ...prev, x: prev.x + dir } : null);
    }
  }, [gameOver]);

  const rotate = useCallback(() => {
    if (!isPlayingRef.current || gameOver || !pieceRef.current) return;
    const p = pieceRef.current;
    const rotatedShape = p.shape[0].map((_, index) => p.shape.map(row => row[index]).reverse());
    const rotatedPiece = { ...p, shape: rotatedShape };
    if (!checkCollision(rotatedPiece, boardRef.current, 0, 0)) {
      setPiece(rotatedPiece);
    }
  }, [gameOver]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlayingRef.current) return;
      // Prevent default scrolling for arrow keys
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }
      switch (e.key) {
        case 'ArrowLeft': moveHorizontal(-1); break;
        case 'ArrowRight': moveHorizontal(1); break;
        case 'ArrowDown': moveDown(); break;
        case 'ArrowUp': rotate(); break;
        case ' ': 
          // Hard drop
          let dropY = 0;
          while (!checkCollision(pieceRef.current, boardRef.current, 0, dropY + 1)) {
            dropY++;
          }
          if (dropY > 0) {
            setPiece(prev => prev ? { ...prev, y: prev.y + dropY } : null);
            lockPiece();
          }
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [moveHorizontal, moveDown, rotate, lockPiece]);

  useEffect(() => {
    let dropInterval: any;
    if (isPlaying) {
      dropInterval = setInterval(moveDown, 800);
    }
    return () => clearInterval(dropInterval);
  }, [isPlaying, moveDown]);

  const startGame = () => {
    setBoard(createEmptyBoard());
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
    spawnPiece();
  };

  const renderBoard = () => {
    const displayBoard = board.map(row => [...row]);
    if (piece && isPlaying) {
      piece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            const boardY = piece.y + y;
            const boardX = piece.x + x;
            if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
              displayBoard[boardY][boardX] = piece.color;
            }
          }
        });
      });
    }
    return displayBoard;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background-dark/90 backdrop-blur-sm p-4">
      <div className="relative bg-surface-dark border-2 border-primary/50 rounded-xl p-6 max-w-sm w-full shadow-[0_0_30px_rgba(244,37,175,0.3)] flex flex-col items-center">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-primary transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-3xl font-black text-slate-100 uppercase italic tracking-widest">TETRIS</h2>
          <p className="text-primary font-bold uppercase tracking-widest mt-1">Score: {score}</p>
        </div>

        <div className="flex justify-center mb-6 w-full">
          <div className="bg-background-dark border-2 border-border-dark p-1 rounded-lg">
            <div 
              className="grid gap-[1px] bg-border-dark w-[200px]" 
              style={{ gridTemplateColumns: `repeat(${BOARD_WIDTH}, minmax(0, 1fr))` }}
            >
              {renderBoard().map((row, y) => 
                row.map((cell, x) => (
                  <div 
                    key={`${y}-${x}`} 
                    className={`aspect-square ${cell ? cell + ' shadow-[inset_0_0_8px_rgba(0,0,0,0.3)] border border-white/20' : 'bg-surface-dark'}`}
                  />
                ))
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          {!isPlaying && !gameOver && (
            <button onClick={startGame} className="w-full bg-primary text-white font-bold uppercase tracking-widest px-8 py-3 rounded-lg hover:brightness-110 transition-all shadow-[0_0_15px_rgba(244,37,175,0.5)]">
              Start Game
            </button>
          )}
          {gameOver && (
            <div className="text-center w-full">
              <p className="text-red-500 font-bold text-xl uppercase tracking-widest mb-4 animate-pulse">Game Over</p>
              <button onClick={startGame} className="w-full bg-primary text-white font-bold uppercase tracking-widest px-8 py-3 rounded-lg hover:brightness-110 transition-all shadow-[0_0_15px_rgba(244,37,175,0.5)]">
                Play Again
              </button>
            </div>
          )}
          <div className="text-slate-400 text-[10px] text-center uppercase tracking-widest mt-2">
            <p>Arrows to Move/Rotate • Space to Drop</p>
          </div>
        </div>
      </div>
    </div>
  );
}
