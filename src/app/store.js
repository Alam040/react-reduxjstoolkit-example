import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/countSlice";
import postReducer from "../features/postSlice";

const store = configureStore({
    reducer: {
        posts: postReducer,
        counter: counterReducer
    }
});

export default store;