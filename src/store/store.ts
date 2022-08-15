import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import currentWeatherSlice from './slices/currentWeatherSlice'
const rootReducer = combineReducers({
    currentWeatherSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
export type AppStore = typeof store;