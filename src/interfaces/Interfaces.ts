export interface PostsData {
  id: number
  messege: string
  likesCount: number
}

export interface State {
  users: PostsData[]
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

export interface Names {
  id: number
  name: string
  messege: string
}
