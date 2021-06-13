import { list } from "../_action/getContentListing";

const initialState = {
  "content-items": { content: [] },
  "page-num-requested": "0",
  "page-size-requested": "0",
  "page-size-returned": "0",
  title: "",
  "total-content-items": "",
};

const listingReducer = (state = initialState, action) => {
  switch (action.type) {
    case list.SAVE_CONTENT_LIST:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default listingReducer;
