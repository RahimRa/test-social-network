import { Wrapper, AddPost, Textarea, Button } from './MyPosts.styled'
import { Post } from './Post/Post'
import { useSelector } from 'react-redux'
import { State } from '../../../interfaces/Interfaces'


export const MyPosts: React.FC = () => {
  let users = useSelector((state: State) => state.users)

  let postsElements = users.map((user) => {
    return (
      <Post messege={user.messege} likesCount={user.likesCount} id={user.id} />
    )
  })

  return (
    <Wrapper>
      <AddPost>
        <Textarea />
        <Button onClick={() => {}}>Add post</Button>
        <Button>Remove</Button>
      </AddPost>
      {postsElements}
    </Wrapper>
  )
}
