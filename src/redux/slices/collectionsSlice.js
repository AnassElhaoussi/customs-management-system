import { createSlice, TaskAbortError } from '@reduxjs/toolkit'
import { db } from '../../services/firebase'


const initialState = {
    data: {
        collectionsData: null,
    }
}

// This slice is for all firestore collections and subcollections


export const collectionsSlice = createSlice({
    name: 'collections',
    initialState,
    reducers: {

        // getData reducer is to get the collections array from firestore
        getCollectionsData: (state, action) => {
            state.data.collectionsData = action.payload // The payload will be the collections arr 
        },


    }
})

export const { getCollectionsData } = collectionsSlice.actions

export default collectionsSlice.reducer