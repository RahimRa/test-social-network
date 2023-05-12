import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../interfaces/Interfaces'
import photo from '../../img/MyPhotosImg/images.jpg'
import photo1 from '../../img/MyPhotosImg/images (1).jpg'
import photo2 from '../../img/MyPhotosImg/images (2).jpg'
import photo3 from '../../img/MyPhotosImg/images (3).jpg'
import photo4 from '../../img/MyPhotosImg/images (4).jpg'
import photo5 from '../../img/MyPhotosImg/images (5).jpg'

const initialState: User = {
  userName: 'Rakhim',
  lastname: 'Dagaev',
  email: '@prostoTed',
  id: 0,
  myPhoto: [photo, photo1, photo2, photo3, photo4, photo5],
}

const userSlise = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action) {
      return action.payload
    },
  },
})

export const { setUsers } = userSlise.actions
export default userSlise.reducer
