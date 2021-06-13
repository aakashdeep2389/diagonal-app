import { combineReducers } from "redux";
import listingReducer from "../_reducer/listingReducer";
import searchReducer from "../_reducer/searchReducer";

const rootReducer = combineReducers({
  listingReducer,
  searchReducer,
});

export default rootReducer;
