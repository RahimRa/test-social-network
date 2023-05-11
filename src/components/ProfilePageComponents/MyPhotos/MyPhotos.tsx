import { Wrapper, Title, Line, Myphoto_Wrapp, Photo } from './MyPhotos.styled'

import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

export const MyPhotos = () => {
  const photos = useSelector((state: RootState) => state.user.myPhoto)

  const photoGallery = photos.map((photo) => {
    return <Photo src={photo} />
  })

  return (
    <Wrapper>
      <Title>My photos</Title>
      <Line />
      <Myphoto_Wrapp>{photoGallery}</Myphoto_Wrapp>
    </Wrapper>
  )
}
