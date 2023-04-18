import { Wrapper, Title, Line, Myphoto_Wrapp, Photo } from './MyPhotos.styled'
import photo from '../../../img/MyPhotosImg/images.jpg'
import photo1 from '../../../img/MyPhotosImg/images (1).jpg'
import photo2 from '../../../img/MyPhotosImg/images (2).jpg'
import photo3 from '../../../img/MyPhotosImg/images (3).jpg'
import photo4 from '../../../img/MyPhotosImg/images (4).jpg'
import photo5 from '../../../img/MyPhotosImg/images (5).jpg'

export const MyPhotos = () => {
  const photoArr = [photo, photo1, photo2, photo3, photo4, photo5]

  const photoGallery = photoArr.map((photo) => {
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
