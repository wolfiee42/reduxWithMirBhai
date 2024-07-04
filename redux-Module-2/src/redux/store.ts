import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice';
import Logger from "./middleware/Logger";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch