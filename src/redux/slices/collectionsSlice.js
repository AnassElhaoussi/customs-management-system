import { createSlice, TaskAbortError } from '@reduxjs/toolkit'
import { db } from '../../services/firebase'


const initialState = {
    data: {
        collectionsData: null,
        documentsData: null
    }
}

// This slice is for all firestore collections and subcollections


export const collectionsSlice = createSlice({
    name: 'collections',
    initialState,
    reducers: {

        // getCollectionsData reducer is to get each collections from firestore
        getCollectionsData: (state, action) => {
            state.data.collectionsData = action.payload // The payload will be the collections arr 
        },

        // getDocumentsData is to get each document from a subcollection in firestore
        getDocumentsData: (state, action) => {
            state.data.documentsData = action.payload // The payload will be the documents arr 
        }


    }
})

export const { getCollectionsData, getDocumentsData } = collectionsSlice.actions

export default collectionsSlice.reducer