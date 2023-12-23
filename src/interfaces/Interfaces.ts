export interface myPost {
  postName: string
  postImgs: string[]
  description: string
  likesCount: number
}
export interface IProfile {
  profileImg: string
  email: string
  userName: string
  lastname: string
  id: number
  profilePhotos: string[]
  myPosts: myPost[]
}

export interface PostInterface {
  photo: string[]
  description: string
  userName: string
  postName: string
  lastname: string
  likesCount: number
}

export interface NewsFeedData {
  id?: string
  Component: any
}

export interface NavbarLink {
  title: string
  link: string
  Component: () => JSX.Element
}

export interface DialogsInterface {
  id: number
  name: string
  message: string
}

export interface IUser {
  id: number
  followed: boolean
  name: string
  status: string
  uniqueUrlName: any
  photos: {
    small: any
    large: any
  }
}

export interface SearchState {
  users: IUser[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
}
