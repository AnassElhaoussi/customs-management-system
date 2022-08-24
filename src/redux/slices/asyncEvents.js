import { createSlice } from '@reduxjs/toolkit'
import { db } from '../../services/firebase'


const initialState = {
    responses: {
        loading: true,
        success: "",
        error: ""
    }
}


export const asyncEventsSlice = createSlice({
    name: 'asyncEvents',
    initialState,
    reducers: {

        // getLoading reducer is to display a loading component from a GET request
        getLoading: (state, action) => {
            state.responses.loading = action.payload // The playload will be a boolean 
        },

        // getError reducer is to display errors whenever we catch an error from an async call
        getError: (state, action) => {
            state.responses.error = action.payload // The payload will be a string representing the error message
        },

        // getSuccess reducer is to display a success message from POST, UPDATE and DELETE requests whenever data is fulfilled from an async call
        getSuccess: (state, action) => {
            state.responses.success = action.payload // the payload will be a string representing the success message
        }
    }
})

export const { getLoading, getSuccess, getError } = asyncEventsSlice.actions

export default asyncEventsSlice.reducer