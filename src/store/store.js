import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../reducers";

const persistConfig = {
  key: "root",
  storage,
};

const enhancedReducer = persistReducer(persistConfig, reducers);

// export default createStore(enhancedReducer, applyMiddleware(logger, thunk));
export default createStore(
  enhancedReducer,
  compose(applyMiddleware(thunk), composeWithDevTools())
);
