const turn = ({ orientation }, direction) => {
  const orientations = 'NESW';
  let idx = orientations.indexOf(orientation);
  if (idx === -1) return {};
  if (idx === 3) idx = -1;

  switch (direction) {
  case 'L':
    return { orientation: orientations.substr(idx - 1, 1) };
  case 'R':
    return { orientation: orientations.substr(idx + 1, 1) };
  default:
    return {};
  }
};

module.exports = turn;
