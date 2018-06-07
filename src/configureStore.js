const { createStore } = require('redux');
const move = require('./move');
const turn = require('./turn');

const defaultState = {
  x: 0,
  y: 0,
  orientation: 'E'
};

function rover(state = defaultState, action) {
  switch (action.type) {
  case 'L':
  case 'R':
    return {
      ...state,
      ...turn(state, action.type)
    };
  case 'M':
    return {
      ...state,
      ...move(state)
    };
  default:
    return state;
  }
}

module.exports = createStore(rover);
