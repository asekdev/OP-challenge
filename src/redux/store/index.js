import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import planReducer, { initialState } from "../reducers/planReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  planReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
