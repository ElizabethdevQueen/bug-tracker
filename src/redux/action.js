import * as actions from "./actionType";
// same as import { ADD_BUG, BUG_REMOVED } from "./actionType";

// export const bugAdded = description => ({
    // type: actions.ADD_BUG,
    //   payload: {
    //     description: "Bug1",
    //   }
// })

export function bugAdded(description){
    return {
      type: actions.ADD_BUG,
      payload: {
        description: "Bug1",
      },
    };
}

export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
      payload: {
        id: "Bug1",
      }
})