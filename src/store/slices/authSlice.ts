import { createSlice } from '@reduxjs/toolkit'

const initialState = ['']

const authSlise = createSlice({
  name: 'autch',
  initialState,
  reducers: {
    addUsers(state, action) {
      return action.payload
    },
  },
})

export const { addUsers } = authSlise.actions
export default authSlise.reducer
