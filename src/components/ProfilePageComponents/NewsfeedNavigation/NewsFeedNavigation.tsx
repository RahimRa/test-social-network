import { useState } from 'react'
import {MyPosts} from './MyPosts/MyPosts'
import { FriendsNews } from './FriendsNews/FriendsNews'
import { GroupsNews } from './GroupsNews/GroupsNews'
import { Wrapper, Nav, Link, Posts , BottomBox} from './NewsFeedNavigation.styles'
import { AddPost } from './AddPost/AddPost'
import { Close } from '../../../img/ProfilePageImg/Close'

export const NewsFeedNavigation = () => {
  const [current, setCurrent] = useState<string>('My posts')

  const navNewsFeed: Record<string, JSX.Element> = {
    'My posts': <MyPosts />,
    'Friends News': <FriendsNews />,
    'Groups News': <GroupsNews />,
    'Add post': (
      <AddPost icon={<Close click={() => setCurrent('My posts')} />} />
    ),
  }

  return (
    <Wrapper>
      <Nav>
        {Object.keys(navNewsFeed).map((key) => (
          <BottomBox isActive={current === key}>
            <Link onClick={() => setCurrent(key)}>{key}</Link>
          </BottomBox>
        ))}
      </Nav>
      <Posts>{navNewsFeed[current]}</Posts>
    </Wrapper>
  )
}
