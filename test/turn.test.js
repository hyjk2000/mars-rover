const turn = require('../src/turn');

describe('turn', () => {
  const INIT_ORIENTATIONS = ['N', 'E', 'S', 'W'];

  describe('left', () => {
    const EXPECTED_ORIENTATIONS = ['W', 'N', 'E', 'S'];

    INIT_ORIENTATIONS.forEach(orientation => {
      const direction = 'L';
      const newOrientation = EXPECTED_ORIENTATIONS.shift();

      it(`${orientation} -> ${newOrientation}`, () => {
        expect(turn({ orientation }, direction)).toEqual({ orientation: newOrientation });
      });
    });
  });

  describe('right', () => {
    const EXPECTED_ORIENTATIONS = ['E', 'S', 'W', 'N'];

    INIT_ORIENTATIONS.forEach(orientation => {
      const direction = 'R';
      const newOrientation = EXPECTED_ORIENTATIONS.shift();

      it(`${orientation} -> ${newOrientation}`, () => {
        expect(turn({ orientation }, direction)).toEqual({ orientation: newOrientation });
      });
    });
  });

  describe('invalid orientation', () => {
    it('should return empty object', () => {
      const orientation = 'X';
      const direction = 'R';
      expect(turn({ orientation }, direction)).toEqual({});
    });
  });

  describe('invalid direction', () => {
    it('should return empty object', () => {
      const orientation = 'E';
      const direction = 'X';
      expect(turn({ orientation }, direction)).toEqual({});
    });
  });
});
