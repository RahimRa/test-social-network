import { NewsFeedData } from '../../../interfaces/Interfaces'
import { Wrapper, Title, Line, Elem } from './NewsfeedNavigation.styles'

export const NewsFeedNavigation = () => {
  const navNewsFeedArr: NewsFeedData[] = [
    {
      isActive: true,
      title: 'My Posts',
    },
    {
      isActive: false,
      title: 'Freands',
    },
    {
      isActive: false,
      title: 'Groups',
    },
  ]

  const handleNavNewsFeed = navNewsFeedArr.map((el) => {
    return (
      <Elem>
        <Title>{el.title}</Title>
        <Line />
      </Elem>
    )
  })
  return <Wrapper>{handleNavNewsFeed}</Wrapper>
}
