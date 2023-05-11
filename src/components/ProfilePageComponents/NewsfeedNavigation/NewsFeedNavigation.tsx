import { useState } from 'react'
import {MyPosts} from './MyPosts/MyPosts'
import { FriendsNews } from './FriendsNews/FriendsNews'
import { GroupsNews } from './GroupsNews/GroupsNews'
import { Wrapper, Nav, Link, Posts } from './NewsFeedNavigation.styles'
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
          <Link isActive={current === key} onClick={() => setCurrent(key)}>
            {key}
          </Link>
        ))}
      </Nav>
      <Posts>{navNewsFeed[current]}</Posts>
    </Wrapper>
  )
}
