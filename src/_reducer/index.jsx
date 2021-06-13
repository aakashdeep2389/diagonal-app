import { combineReducers } from "redux";
import listingReducer from "../_reducer/listingReducer";

const rootReducer = combineReducers({
  listingReducer,
});

export default rootReducer;
