import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todoReducer from "./reducers/todoReducer";

const store = configureStore({
    reducer: { todo: todoReducer },
    middleware: [...getDefaultMiddleware()],
    devTools: true,
});

export default store;
