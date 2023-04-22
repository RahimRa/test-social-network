import { createSlice } from '@reduxjs/toolkit'

const initialState = ['']

const profileSlise = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addUsers(state, action) {
      return action.payload
    },
  },
})

export const { addUsers } = profileSlise.actions
export default profileSlise.reducer
