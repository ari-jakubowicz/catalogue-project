import { createReducer } from "@reduxjs/toolkit";
import { addPlayerToSquad, removePlayer } from "./actions";

const initialState = {
  addedPlayers: []
}

// const reducer = (state, action) => {
//   if (action.type === "SHOW_PLAYER") {
//     return {
//       ...state,
//       selectedPlayerId: action.payload
//     }
//   }
//   return state;
// };

const reducer = createReducer(initialState, {
  [addPlayerToSquad]: (state, action) => {
    const addedPlayer = action.payload.id;
    const players = [...state.addedPlayers];
    let exists = false;
    for(let i = 0; i < players.length; i++) {
      if (players[i] == addedPlayer) {
        exists = true;
      }
    }
    if (!exists) {
      players.push(addedPlayer);
    } else {
      alert(addedPlayer + " is already in the squad");
    }
    return {...state, addedPlayers: players};
  },
  [removePlayer]: (state, action) => {
    const removedPlayer = action.payload.id;
    const players = [...state.addedPlayers].filter((p) => p != removedPlayer);
    return {...state, addedPlayers: players};
  }
});

export default reducer;
