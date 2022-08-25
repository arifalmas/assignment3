import { combineReducers } from "redux";
import blogFilter from "./blogsFilter/reducer";
import blogs from "./blogs/reducer";

const reducer = combineReducers({
  blogs: blogs,
  blogFilter: blogFilter,
});

export default reducer;
