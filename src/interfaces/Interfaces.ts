export interface PostsData {
  id: number
  messege: string
  likesCount: number
}

export interface State {
  users: PostsData[]
}

export interface NewsFeedData {
  id?:string
  title: string
  isActive: boolean
}

export interface NavbarLink {
  link: string
  Component: () => JSX.Element
}

export interface Names {
  id: number
  name: string
  messege: string
}
