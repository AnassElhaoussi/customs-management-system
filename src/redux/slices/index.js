import collections from './collectionsSlice'
import asyncEvents from './asyncEvents'
import { combineReducers } from '@reduxjs/toolkit'


const rootReducer = combineReducers({
    collections: collections,
    asyncEvents: asyncEvents
})

export default rootReducer