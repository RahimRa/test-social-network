import { createSlice } from '@reduxjs/toolkit'

const initialState = ['']

const recipesSlise = createSlice({
  name: 'autch',
  initialState,
  reducers: {
    addUsers(state, action) {
      return action.payload
    },
  },
})

export const { addUsers } = recipesSlise.actions
export default recipesSlise.reducer
