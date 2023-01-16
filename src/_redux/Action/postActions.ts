import { postTypes } from "../Constants/postTypes";
import {
  FetchPostsRequest,
  FetchPostsSuccessPayload,
  FetchPostsSuccess,
  FetchPostsFailurePayload,
  FetchPostsFailure,
} from "../Constants/types";

export const fetchPostsRequest = (): FetchPostsRequest => ({
  type: postTypes.FETCH_POST_REQUEST,
});

export const fetchPostsSuccess = (
  payload: FetchPostsSuccessPayload
): FetchPostsSuccess => ({
  type: postTypes.FETCH_POST_SUCCESS,
  payload,
});

export const fetchPostsFailure = (
  payload: FetchPostsFailurePayload
): FetchPostsFailure => ({
  type: postTypes.FETCH_POST_FAILURE,
  payload,
});
