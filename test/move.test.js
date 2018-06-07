const move = require('../src/move');

describe('move', () => {
  describe('within boundry', () => {
    it('should move the rover east', () => {
      const curr = { x: 0, y: 0, orientation: 'E' };
      expect(move(curr)).toEqual({ x: 1 });
    });

    it('should move the rover north', () => {
      const curr = { x: 0, y: 0, orientation: 'N' };
      expect(move(curr)).toEqual({ y: 1 });
    });

    it('should move the rover west', () => {
      const curr = { x: 1, y: 0, orientation: 'W' };
      expect(move(curr)).toEqual({ x: 0 });
    });

    it('should move the rover south', () => {
      const curr = { x: 0, y: 1, orientation: 'S' };
      expect(move(curr)).toEqual({ y: 0 });
    });
  });

  describe('off boundry', () => {
    it('should throw when moving off the east boundry', () => {
      const curr = { x: 4, y: 4, orientation: 'E' };
      expect(() => move(curr)).toThrow();
    });

    it('should throw when moving off the north boundry', () => {
      const curr = { x: 4, y: 4, orientation: 'N' };
      expect(() => move(curr)).toThrow();
    });

    it('should throw when moving off the west boundry', () => {
      const curr = { x: 0, y: 0, orientation: 'W' };
      expect(() => move(curr)).toThrow();
    });

    it('should throw when moving off the south boundry', () => {
      const curr = { x: 0, y: 0, orientation: 'S' };
      expect(() => move(curr)).toThrow();
    });
  });

  describe('invalid orientation', () => {
    it('should return empty object', () => {
      const curr = { orientation: 'X' };
      expect(move(curr)).toEqual({});
    });
  });
});
