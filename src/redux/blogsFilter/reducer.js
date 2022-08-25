import {
    FILTER_BY_AUTHOR,
    FILTER_BY_CATEGORY,
    FILTER_BY_READ,
    FILTER_BY_SEARCH,
    FILTER_CLEAR,
  } from "./actionTypes";
  
  import initialState from "./initialState";
  
  const reducer = (state = initialState, action) => {
    let updatedState = { ...state };
    switch (action.type) {
      case FILTER_BY_AUTHOR:
        if (updatedState.byAuthor.includes(action.payload)) {
          updatedState.byAuthor = updatedState.byAuthor.filter(
            (author) => author !== action.payload
          );
        } else {
          updatedState.byAuthor.push(action.payload);
        }
        return updatedState;
      case FILTER_BY_CATEGORY:
        if (updatedState.byCategory.includes(action.payload)) {
          updatedState.byCategory = updatedState.byCategory.filter(
            (name) => name !== action.payload
          );
        } else {
          updatedState.byCategory.push(action.payload);
        }
        return updatedState;
      case FILTER_BY_READ:
        if (updatedState.byRead.includes(action.payload)) {
          updatedState.byRead = updatedState.byRead.filter(
            (read) => read !== action.payload
          );
        } else {
          updatedState.byRead.push(action.payload);
        }
        return updatedState;
      case FILTER_BY_SEARCH:
        return { ...updatedState, search: action.payload };
      case FILTER_CLEAR:
        return {
          byAuthor: [],
          byCategory: [],
          byRead: [],
          bySearch: [],
          search: "",
        };
      default:
        return updatedState;
    }
  };
  
  export default reducer;
  