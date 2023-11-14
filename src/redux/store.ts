import {configureStore} from '@reduxjs/toolkit'
import userReducer from './features/userSlice'

const reducer = {
	user: userReducer,
}

const store = configureStore({
	reducer,
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
