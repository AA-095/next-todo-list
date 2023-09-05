import { Action } from "redux";
import { SHOW_ALL, SET_VISIBILITY_FILTER } from "../actions/actionsTypes";

const visibilityFilter = (state = SHOW_ALL, action:any) => {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return action.filter;
      default:
        return state;
    }
  };
  
  export default visibilityFilter;