import { createSlice, TaskAbortError } from '@reduxjs/toolkit'
import { db } from '../../services/firebase'


const initialState = {
    responses: {
        loading: "",
        success: null,
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

        getSuccess: (state, action) => {
            state.responses.success = action.payload
        },

        getError: (state, action) => {
            state.responses.error = action.payload
        }
    }
})

export const { getLoading, getSuccess, getError } = collectionsSlice.actions

export default collectionsSlice.reducer