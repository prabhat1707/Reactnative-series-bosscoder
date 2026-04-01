import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    likeCount: 0,
    userName: "prabhat"
}

export const uiDataReducer = createSlice({
    name: "uiDataReducer",
    initialState:initialState,
    reducers: {
        increaseLikesByValue: (state,action) => {
            state.likeCount = state.likeCount + action.payload
        },
        decreaseLikes: (state) => {
            state.likeCount = state.likeCount - 1
        }
    }
})

export const {increaseLikesByValue,decreaseLikes} = uiDataReducer.actions