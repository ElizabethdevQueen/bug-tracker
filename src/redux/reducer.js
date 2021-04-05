// []
import * as actions from "./actionType";
// same as import { ADD_BUG, BUG_REMOVED } from "./actionType";

let lastId = 0;

export default function reducer(state = [], action){
    switch(action.type){
        case actions.ADD_BUG:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        case actions.BUG_RESOLVED:
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true});
        default: 
        return state;
    }
}