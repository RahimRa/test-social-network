import { createSlice } from '@reduxjs/toolkit'
import { PostsData } from '../../interfaces/Interfaces'

const initialState: PostsData[] = [
  {
    id: 0,
    messege: 'Hi , how are you?',
    likesCount: 2,
  },
  {
    id: 1,
    messege: "It's my ferst post ",
    likesCount: 7,
  },
]


const recipesSlise = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      return action.payload
    },
  },
})

export const { setUsers } = recipesSlise.actions
export default recipesSlise.reducer
