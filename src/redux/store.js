import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./rootReducer";

const Store = createStore(reducer, composeWithDevTools());

export default Store;
