import { list } from "../_action/searchAction";

const initialState = { searchval: "" };

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case list.SEARCH_ITEM:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
