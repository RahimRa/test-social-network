import { Wrapper } from './MyPosts.styled'
import { Post } from './Post/Post'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'
import { PostInterface } from '../../../../interfaces/Interfaces'

export const MyPosts: React.FC = () => {
  let posts = useSelector((state: RootState) => state.posts)


  let postsElements = posts.map((post: PostInterface) => {

    return (
      <Post
        lastname={post.lastname}
        description={post.description}
        likesCount={post.likesCount}
        userName={post.userName}
        postName={post.postName}
        photo={post.photo}
      />
    )
  })


  return <Wrapper>{postsElements}</Wrapper>
}
