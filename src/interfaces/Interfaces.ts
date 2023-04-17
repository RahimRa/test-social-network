
export interface PostsData {
  id: number
  messege: string
  likesCount: number
}

export interface State {
  users: PostsData[]
}

export interface NavbarLinks {
  title: string
  link: string
  img: string
}

export interface Names {
  id: number
  name: string
  messege: string
}
