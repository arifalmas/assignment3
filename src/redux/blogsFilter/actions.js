import {
    FILTER_BY_AUTHOR,
    FILTER_BY_CATEGORY,
    FILTER_BY_READ,
    FILTER_BY_SEARCH,
    FILTER_CLEAR,
  } from "./actionTypes";
  
  export const filterByAuthor = (author) => {
    return {
      type: FILTER_BY_AUTHOR,
      payload: author,
    };
  };
  
  export const filterByCategory = (category) => {
    return {
      type: FILTER_BY_CATEGORY,
      payload: category,
    };
  };
  
  export const filterByRead = (read) => {
    return {
      type: FILTER_BY_READ,
      payload: read,
    };
  };
  
  export const filterBySearch = (searchKeyword) => {
    return {
      type: FILTER_BY_SEARCH,
      payload: searchKeyword,
    };
  };
  
  export const clearFilter = () => {
    return {
      type: FILTER_CLEAR,
    };
  };
  