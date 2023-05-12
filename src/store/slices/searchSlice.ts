import { createSlice } from '@reduxjs/toolkit'
import { SearchState } from '../../interfaces/Interfaces'

const initialState: SearchState = {
  users: [
    {
      id: 1,
      followed: true,
      fullName: 'Dmitry',
      status: 'I am boss',
      location: {
        city: 'Minsk',
        country: 'Belarus',
      },
    },
    {
      id: 2,
      followed: true,
      fullName: 'Sasha',
      status: 'I am boss',
      location: {
        city: 'Moscow',
        country: 'Russia',
      },
    },
    {
      id: 3,
      followed: false,
      fullName: 'Andrey',
      status: 'I am boss',
      location: {
        city: 'Kiev',
        country: 'Ukraine',
      },
    },
  ],
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    follow(state, action) {
      const userId = action.payload
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === userId) {
            return { ...user, followed: true }
          }
          return user
        }),
      }
    },
    unfollow(state, action) {
      const userId = action.payload
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === userId) {
            return { ...user, followed: false }
          }
          return user
        }),
      }
    },
  },
})
export const { follow, unfollow } = searchSlice.actions
export default searchSlice.reducer
