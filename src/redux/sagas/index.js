import { delay } from "redux-saga";
import { put, takeEvery, all } from "redux-saga/effects";

function* helloSaga() {
  console.log("Loading...");
  yield delay(1000);
  console.log("Hello Sagas");
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
    ]);
}