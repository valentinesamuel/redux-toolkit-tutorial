import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter//counterSlice";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/posts/users/usersSlice"

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    posts: postsReducer,
    users: usersReducer
  },
});
