import { configureStore } from '@reduxjs/toolkit'
import collectionsReducer from './slices/collectionsSlice'

export const store = configureStore({
    reducer: {
        collections: collectionsReducer
    },
})