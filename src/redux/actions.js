import { createAction } from "@reduxjs/toolkit";

// export const addPlayerToSquad = (playerId) => {
//   return {
//     type: "ADD_PLAYER_TO_SQUAD",
//     payload: playerId
//   };
// };

export const addPlayerToSquad = createAction("ADD_PLAYER_TO_SQUAD");
export const removePlayer = createAction("REMOVE_PLAYER");
