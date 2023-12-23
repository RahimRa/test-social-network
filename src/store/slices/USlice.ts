// import { createSlice , PayloadAction} from '@reduxjs/toolkit'
// import { PostInterface } from '../../interfaces/Interfaces'
// import Img from '../../img/ProfilePageImg/postsImg/images (1).jpg'
// import Img1 from '../../img/ProfilePageImg/postsImg/images (2).jpg'
// import Img2 from '../../img/ProfilePageImg/postsImg/images (3).jpg'
// import Img3 from '../../img/ProfilePageImg/postsImg/images (4).jpg'
// import Img4 from '../../img/ProfilePageImg/postsImg/images (5).jpg'
// import Img5 from '../../img/ProfilePageImg/postsImg/images (6).jpg'

// const initialState: PostInterface[] = [
//   {
//     userName: 'Alex ',
//     lastname: 'Petrov',
//     postName: 'Nigth City',
//     photo: [Img, Img1, Img2],
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quam?',
//     likesCount: 2,
//   },
//   {
//     userName: 'Ksysha ',
//     lastname: 'Stepanovna',
//     postName: 'Die Sonne',
//     photo: [Img3, Img4, Img5],
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt molestias quod harum hic modi fugit voluptas ea, aspernatur vero enim quidem quisquam dolor expedita. Rem magnam architecto reprehenderit deserunt autem!",
//     likesCount: 3,
//   },
// ]

// const profileSlise = createSlice({

//   name: 'posts',
//   initialState,
//   reducers: {
//     setPost(state, action: PayloadAction<PostInterface>) {
//       return [...state, action.payload]
//     },
//   },
// })




// export const { setPost } = profileSlise.actions
// export default profileSlise.reducer
