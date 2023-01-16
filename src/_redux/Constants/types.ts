import { IPost, Post } from "../../models/IPost";
import { postTypes } from "./postTypes";

export interface PostsState {
  pending: boolean;
  posts: Post[];
  error: string | null;
}

export interface FetchPostsSuccessPayload {
  posts: Post[];
}

export interface FetchPostsFailurePayload {
  error: string;
}

export interface FetchPostsRequest {
  type: typeof postTypes.FETCH_POST_REQUEST;
}

export type FetchPostsSuccess = {
  type: typeof postTypes.FETCH_POST_SUCCESS;
  payload: FetchPostsSuccessPayload;
};

export type FetchPostsFailure = {
  type: typeof postTypes.FETCH_POST_FAILURE;
  payload: FetchPostsFailurePayload;
};

export type PostsActions =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure;
