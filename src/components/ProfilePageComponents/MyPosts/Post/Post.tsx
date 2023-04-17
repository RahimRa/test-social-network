import { Wrapper, Avatar, PostItem, Like } from './Post.styled'

type PostProps = {
  id: number
  messege: string
  likesCount: number
}

export const Post: React.FC<PostProps> = ({ id, messege, likesCount }) => {
  return (
    <Wrapper>
      <Avatar src='http://surl.li/gafex' />
      <PostItem>{messege}</PostItem>
      <Like>Like: {likesCount}</Like>
    </Wrapper>
  )
}
