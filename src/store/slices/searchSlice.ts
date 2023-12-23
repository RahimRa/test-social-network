import { createSlice } from '@reduxjs/toolkit'
import { SearchState } from '../../interfaces/Interfaces'

const initialState: SearchState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 1
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    follow(state, action) {
      const userId = action.payload
      const user = state.users.find((user) => user.id === userId)
      if (user) {
        user.followed = true
      }
    },
    unfollow(state, action) {
      const userId = action.payload
      const user = state.users.find((user) => user.id === userId)
      if (user) {
        user.followed = false
      }
    },
    setUsers(state, action) {
      return { ...state, users: [...state.users, ...action.payload] }
    },
  },
})
export const { follow, unfollow, setUsers } = searchSlice.actions
export default searchSlice.reducer
