import { useState } from 'react'
import { NewsFeedData } from '../../../interfaces/Interfaces'
import { MyPosts } from './MyPosts/MyPosts'
import { FriendsNews } from './FriendsNews/FriendsNews'
import { GroupsNews } from './GroupsNews/GroupsNews'
import { Wrapper, Line, Nav, Link } from './NewsFeedNavigation.styles'

export const NewsFeedNavigation = () => {
  const [current, setCurrent] = useState<string>('1')

  const navNewsFeedArr: Record<string, JSX.Element> = {
    '1': <MyPosts />,
    '2': <FriendsNews />,
    '3': <GroupsNews />,
  }

  return (
    <Wrapper>
      <Nav>
        {Object.keys(navNewsFeedArr).map((key) => (
          <Link isActive={current === key} onClick={() => setCurrent(key)}>
            MyPosts
            <Line />
          </Link>
        ))}
      </Nav>
      {navNewsFeedArr[current]}
    </Wrapper>
  )
}
