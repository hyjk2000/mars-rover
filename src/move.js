const offBoundryError = new Error('You are moving off the boundry');

const move = state => {
  const { x, y, orientation } = state;

  switch (orientation) {
  case 'E':
    if (x + 1 > 4) throw offBoundryError;
    return { x: x + 1 };
  case 'N':
    if (y + 1 > 4) throw offBoundryError;
    return { y: y + 1 };
  case 'W':
    if (x - 1 < 0) throw offBoundryError;
    return { x: x - 1 };
  case 'S':
    if (y - 1 < 0) throw offBoundryError;
    return { y: y - 1 };
  default:
    return {};
  }
};

module.exports = move;
