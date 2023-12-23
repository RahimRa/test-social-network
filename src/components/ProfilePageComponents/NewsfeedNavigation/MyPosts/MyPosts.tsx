import { Wrapper } from './MyPosts.styled'
import { Post } from './Post/Post'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'
import { myPost } from '../../../../interfaces/Interfaces'

export const MyPosts: React.FC = () => {
  let posts = useSelector((state: RootState) => state.profile.myPosts)
  let profile = useSelector((state: RootState) => state.profile)


  let postsElements = posts.map((post: myPost) => {
    return (
      <Post
        lastname={profile.lastname}
        userName={profile.userName}
        description={post.description}
        likesCount={post.likesCount}
        postName={post.postName}
        postImgs={post.postImgs}
      />
    )
  })


  return <Wrapper>{postsElements}</Wrapper>
}
