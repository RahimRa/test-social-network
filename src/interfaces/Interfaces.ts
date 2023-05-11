export interface User {
  email: string
  userName: string
  lastname: string
  id: number
  myPhoto: string[]
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
