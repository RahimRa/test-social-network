import { Img, Wrapper, Avatar } from './Profile.styles'
import { MyPosts } from '../../components/ProfilePageComponents/MyPosts/MyPosts'
import { ProfileInfo } from '../../components/ProfilePageComponents/ProfileInfo/ProfileInfo'

export const ProfilePage: React.FC = () => {
  return (
    <Wrapper>
      <Img src='http://surl.li/glfkj' height={300} />
        {/* <ProfileInfo /> */}
        <Avatar src='http://surl.li/fzhek' alt='Avatar' />
      <MyPosts />
    </Wrapper>
  )
}
