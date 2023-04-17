
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import users from './slices/userSlice'

const rootReducer = {
  users,
}

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
