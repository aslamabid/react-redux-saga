import { combineReducers } from "redux";
import postReducer from "./user.reducer";

const rootReducer = combineReducers({
  posts: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
