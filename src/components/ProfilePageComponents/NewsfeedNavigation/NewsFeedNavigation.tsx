import { useState } from 'react'
import { MyPosts } from './MyPosts/MyPosts'
import { FriendsNews } from './FriendsNews/FriendsNews'
import { GroupsNews } from './GroupsNews/GroupsNews'
import { Wrapper,  Nav, Link, Posts } from './NewsFeedNavigation.styles'
import { Input } from './Input/Input'

export const NewsFeedNavigation = () => {
  const [current, setCurrent] = useState<string>('MyPosts')

  const navNewsFeed: Record<string, JSX.Element> = {
    MyPosts: <MyPosts />,
    FriendsNews: <FriendsNews />,
    GroupsNews: <GroupsNews />,
  }

  return (
    <Wrapper>
      <Nav>
        {Object.keys(navNewsFeed).map((key) => (
          <Link isActive={current === key} onClick={() => setCurrent(key)}>
            {key}
          </Link>
        ))}
      </Nav>
      <Input />
      <Posts>{navNewsFeed[current]}</Posts>
    </Wrapper>
  )
}
