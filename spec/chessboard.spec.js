const { generateChessboard, renderChessboard } = require('../chessboard');

describe('Board', () => {
  let board;

  beforeEach(() => {
    board = generateChessboard();
  });

  describe('placePiece', () => {
    it('should return the correct piece for a given starting position', () => {
      expect(board[0][0]).toEqual('Ч Ладья');
      expect(board[1][1]).toEqual('Ч Пешка');
      expect(board[7][7]).toEqual('Б Ладья');
      expect(board[5][4]).toEqual(null);
    });
  });

  describe('init', () => {
    it('should generate an 8x8 array', () => {
      expect(board.length).toEqual(8);
      for (let i = 0; i < board.length; i++) {
        expect(board[i].length).toEqual(8);
      }
    });
  });

  describe('renderChessboard', () => {
    it('should return a string', () => {
      expect(typeof renderChessboard(board)).toEqual('string');
    });

    it('should have an emoji (first element is `♜`)', () => {
      expect(renderChessboard(board)[0]).toEqual('♜');
    });

    it('should have an emoji (sixth element is `♞`)', () => {
      expect(renderChessboard(board)[6]).toEqual('♞');
    });
  });
});
