import { Wrapper } from './MyPosts.styled'
import { Post } from './Post/Post'
import { useSelector } from 'react-redux'
import { State } from '../../../../interfaces/Interfaces'

export const MyPosts: React.FC = () => {

  let postData = useSelector((state: any) => state.profile)
  console.log(postData);
  
  let users = useSelector((state: State) => state.users)

  let postsElements = users.map((user) => {
    return (
      <Post messege={user.messege} likesCount={user.likesCount} id={user.id} />
    )
  })

  return (
    <Wrapper>
      {postsElements}
    </Wrapper>
  )
}
