
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import users from './slices/userSlice'
import profile from './slices/profileSlice'

const rootReducer = {
  users,
  profile,
}

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
