// in imports/client/reducers/openTiles.js
import * as types from '/imports/client/constants/actionTypes.js';
const INITIAL_TILES_COUNT = 0
const { UPDATE, RESET } = types.openTiles;

export default function openTiles(state = INITIAL_TILES_COUNT, action) {
  switch (action.type) {
    case UPDATE:
      return state + 1;
    case RESET:
      return INITIAL_TILES_COUNT;
    default:
      return state;
  }
}
