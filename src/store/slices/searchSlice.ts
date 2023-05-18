import { createSlice } from '@reduxjs/toolkit'
import { SearchState } from '../../interfaces/Interfaces'

const initialState: SearchState = {
  users: [
    {
      id: 1,
      followed: true,
      fullName: 'Dmitry',
      status: 'I am boss',
      photoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNW-QQ_RtxkSo-2I-5twSGWVs7AEjyO-oGA&usqp=CAU',
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
      photoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkZZ_O_6Be0AWmIk7SRlKXIRVZjTeWDYL1A&usqp=CAU',
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
      photoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlIruH6q6l27JAxlkK3cZdDn1EFYOrkn9EFA&usqp=CAU',
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
    setUsers(state, action) {
      return { ...state, users: [...state.users, ...action.payload] }
    },
  },
})
export const { follow, unfollow, setUsers } = searchSlice.actions
export default searchSlice.reducer
