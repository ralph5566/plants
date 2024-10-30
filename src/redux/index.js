import { configureStore } from '@reduxjs/toolkit'

import plantNoSlice from './PlantNo'
import signSlice from './Sign'
import showBarSlice from './showBarModal'

const store = configureStore({
    reducer: {
        isAuth: signSlice.reducer,
        plantNo: plantNoSlice.reducer,
        showBar: showBarSlice.reducer,
    },
})

export default store
