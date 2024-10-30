// import { createStore } from 'redux'
import { createSlice } from '@reduxjs/toolkit'

const initialState = { no: '01' }

const plantNoSlice = createSlice({
    name: 'plantNo',
    initialState: initialState,
    reducers: {
        setNo(state, action) {
            state.no = action.payload
        },
    },
})

// const store = configureStore({
//     reducer: { plantNo: signSlice.reducer },
// })

export const plantNoActions = plantNoSlice.actions

export default plantNoSlice
