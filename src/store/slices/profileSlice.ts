import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProfile, myPost } from '../../interfaces/Interfaces'
import photo from '../../img/MyPhotosImg/images.jpg'
import photo1 from '../../img/MyPhotosImg/images (1).jpg'
import photo2 from '../../img/MyPhotosImg/images (2).jpg'
import photo3 from '../../img/MyPhotosImg/images (3).jpg'
import photo4 from '../../img/MyPhotosImg/images (4).jpg'
import photo5 from '../../img/MyPhotosImg/images (5).jpg'
import postImg from '../../img/ProfilePageImg/postsImg/images (1).jpg'
import postImg1 from '../../img/ProfilePageImg/postsImg/images (2).jpg'
import postImg2 from '../../img/ProfilePageImg/postsImg/images (3).jpg'

const initialState: IProfile = {
  userName: 'Rakhim',
  lastname: 'Dagaev',
  email: '@prostoTed',
  profileImg: '',
  id: 0,
  profilePhotos: [photo, photo1, photo2, photo3, photo4, photo5],
  myPosts: [
    {
      postImgs: [postImg, postImg1, postImg2],
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt molestias quod harum hic modi fugit voluptas ea, aspernatur vero enim quidem quisquam dolor expedita. Rem magnam architecto reprehenderit deserunt autem!',
      likesCount: 3,
      postName: 'Временное название',
    },
  ],
}

const profileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<IProfile>) {
      return action.payload
    },

    setPost(state, action: PayloadAction<myPost>) {
      return { ...state.myPosts, ...action.payload }
    },
  },
})

export const { setUsers, setPost } = profileSlice.actions
export default profileSlice.reducer
