import { createSlice, TaskAbortError } from '@reduxjs/toolkit'
import { db } from '../../services/firebase'


const initialState = {
    responses: {
        loading: true,
        success: "",
        data: null,
        error: ""
    }
}



export const collectionsSlice = createSlice({
    name: 'collections',
    initialState,
    reducers: {
        getLoading: (state, action) => {
            state.responses.loading = action.payload
        },

        getData: (state, action) => {
            state.responses.data = action.payload
        },

        getError: (state, action) => {
            state.responses.error = action.payload
        },
        getSuccess: (state, action) => {
            state.responses.success = action.payload
        }
    }
})

export const { getLoading, getSuccess, getError, getData } = collectionsSlice.actions

export default collectionsSlice.reducer