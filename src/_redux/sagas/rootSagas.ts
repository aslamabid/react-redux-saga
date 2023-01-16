import { all, fork } from "redux-saga/effects";
import postsSaga from "./postSagas";

export function* rootSaga() {
  yield all([fork(postsSaga)]);
}
