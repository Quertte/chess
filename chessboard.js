function generateChessboard() {
  const figures = ['Ладья', 'Конь', 'Слон', 'Ферзь', 'Король', 'Слон', 'Конь', 'Ладья'];
  const pawns = new Array(8).fill('Пешка');
  const blackFigures = figures.map((figure) => `Ч ${figure}`);
  const whiteFigures = figures.map((figure) => `Б ${figure}`);
  const blackPawns = pawns.map((pawn) => `Ч ${pawn}`);
  const whitePawns = pawns.map((pawn) => `Б ${pawn}`);
  const nullRow = new Array(8).fill(null);
  const chessBoard = Array.from({ length: 8 }).map((row, i) => {
    if (i === 0) {
      return blackFigures;
    } if (i === 1) {
      return blackPawns;
    } if (i === 6) {
      return whitePawns;
    } if (i === 7) {
      return whiteFigures;
    }
    return nullRow;
  });
  // Тут твой код. Верни массив массивов.
  return chessBoard;
}

// console.log(generateChessboard());

const figures = ['Ладья', 'Конь', 'Слон', 'Ферзь', 'Король', 'Слон', 'Конь', 'Ладья'];
const arr = [];
arr.push(figures);

function renderChessboard() {
  const emojis = {
    'Б Ферзь': '♕',
    'Б Король': '♔',
    'Б Слон': '♗',
    'Б Конь': '♘',
    'Б Ладья': '♖',
    'Б Пешка': '♙',
    'Ч Ферзь': '♛',
    'Ч Король': '♚',
    'Ч Слон': '♝',
    'Ч Конь': '♞',
    'Ч Ладья': '♜',
    'Ч Пешка': '♟',
  };

  // Тут твой код.
}

module.exports = { generateChessboard, renderChessboard };
