// import { createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducer/root.reducer";
import { rootSaga } from "./sagas/rootSagas";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(sagaMiddleware)
      .concat(logger),
});

sagaMiddleware.run(rootSaga);

export default store;
