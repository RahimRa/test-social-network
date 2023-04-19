import { Img, Wrapper, Info_Wrap, Main, Child1, Child2 } from './Profile.styles'
import { ProfileInfo } from '../../components/ProfilePageComponents/ProfileInfo/ProfileInfo'
import NigthCiti from '../../img/ProfilePageImg/Nigth city.jpg'
import { MyPhotos } from '../../components/ProfilePageComponents/MyPhotos/MyPhotos'
import { NewsFeedNavigation } from '../../components/ProfilePageComponents/NewsFeedNavigation/NewsFeedNavigation'

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
        </Child2>
      </Main>
    </Wrapper>
  )
}
