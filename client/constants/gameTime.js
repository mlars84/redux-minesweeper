import * as types from '/imports/client/constants/actionTypes.js';
const INITIAL_TIME = 0
const { UPDATE, RESET } = types.gameTimeType;

export default function gameTime(state = INITIAL_TIME, action = {}) {
  switch (action.type) {
    case UPDATE:
      return state + 1;
    case RESET:
      return INITIAL_TIME;
    default:
      return state;
  }
}
