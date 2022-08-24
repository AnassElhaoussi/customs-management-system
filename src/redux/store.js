import { configureStore } from '@reduxjs/toolkit'
import collectionsReducer from './slices/collectionsSlice'
import asyncEventsReducer from './slices/asyncEvents'

export const store = configureStore({
    reducer: {
        collections: collectionsReducer,
        asyncEvents: asyncEventsReducer
    },
})