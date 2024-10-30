// import { createStore } from 'redux'
import { createSlice } from '@reduxjs/toolkit'

const initialState = { isShow: false }

const showBarSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        onShow(state) {
            state.isShow = true
        },
        onClose(state) {
            state.isShow = false
        },
    },
})

export const showBarActions = showBarSlice.actions

export default showBarSlice
