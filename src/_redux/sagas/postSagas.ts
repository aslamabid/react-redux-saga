import axios from "axios";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { IPost } from "../../models/IPost";
import { fetchPostsSuccess, fetchPostsFailure } from "../Action/postActions";
import { postTypes } from "../Constants/postTypes";

const getPosts = () =>
  axios.get<IPost, IPost>("https://jsonplaceholder.typicode.com/todos");

function* fetchPostsSaga() {
  try {
    const response: IPost = yield call(getPosts);
    console.log("ascxsc", response);

    yield put(
      fetchPostsSuccess({
        posts: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchPostsFailure({
        error: e.message,
      })
    );
  }
}

function* postsSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
