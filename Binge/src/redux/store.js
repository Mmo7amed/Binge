import { configureStore } from '@reduxjs/toolkit'
import showReducer from './slices/watchlistSlice'

export const store = configureStore({
    reducer: {
        watchlist: showReducer
    }
});