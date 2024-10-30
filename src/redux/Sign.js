// import { createStore } from 'redux'
import { createSlice } from '@reduxjs/toolkit'

const initialState = { isSign: false }

const signSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login(state) {
            state.isSign = true
        },
        logout(state) {
            state.isSign = false
        },
    },
})

// const store = configureStore({
//     reducer: { isAuth: signSlice.reducer },
// })

export const authActions = signSlice.actions

export default signSlice
