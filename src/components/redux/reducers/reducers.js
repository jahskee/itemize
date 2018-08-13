/* jshint esversion: 6 */
import { combineReducers } from "redux";
import * as _actions from "../actions/actions";


// store.data is anything not yet categorized
const dataReducer = (prevData = {}, action) => {
    switch (action.type) {
      case _actions.UPDATE_DATA:
        return {...prevData, ...action.payload};
      default:
        return prevData;
    }
};

const reducer = combineReducers({
    //decks: deckReducer,
    data: dataReducer
  });
  
  export default reducer;