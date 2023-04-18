import { Img, Wrapper, Info_Wrap, Main, Child1, Child2 } from './Profile.styles'
import { MyPosts } from '../../components/ProfilePageComponents/MyPosts/MyPosts'
import { ProfileInfo } from '../../components/ProfilePageComponents/ProfileInfo/ProfileInfo'
import NigthCiti from '../../img/ProfilePageImg/Nigth city.jpg'
import { MyPhotos } from '../../components/ProfilePageComponents/MyPhotos/MyPhotos'
import { NewsFeedNavigation } from '../../components/ProfilePageComponents/NewsfeedNavigation/NewsfeedNavigation'

export const ProfilePage: React.FC = () => {
  return (
    <Wrapper>
      <Img src={NigthCiti} height={300} />
      <Info_Wrap>
        <ProfileInfo />
      </Info_Wrap>
      <Main>
        <Child1>
          <MyPhotos />
        </Child1>
        <Child2>
          <NewsFeedNavigation />
          <MyPosts />
        </Child2>
      </Main>
    </Wrapper>
  )
}
