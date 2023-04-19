import { Wrapper, AddPost, Textarea } from './MyPosts.styled'
import { Post } from './Post/Post'
import { useSelector } from 'react-redux'
import { State } from '../../../../interfaces/Interfaces'
import { Save } from './Circle/Save'

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
        <Save />
      </AddPost>
      {postsElements}
    </Wrapper>
  )
}
