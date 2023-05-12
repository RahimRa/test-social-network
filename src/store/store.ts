
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import user from './slices/userSlice'
import posts from './slices/profileSlice'
import dialogs from './slices/dialogsSlice'
import search from './slices/searchSlice'

const rootReducer = {
  user,
  posts,
  dialogs,
  search,
}

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>