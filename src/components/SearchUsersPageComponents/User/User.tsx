import React from 'react'
import {
  Wrapper,
  FirstChild,
  AvatarImg,
  SubscribeButton,
  Box,
  Name,
  Status,
} from './User.styles'
import avatar from '../../../img/man-avatars.png'
import { IUser } from '../../../interfaces/Interfaces'

interface UserProps {
  user: IUser
  handleFollow: (userId: number) => void
  handleUnfollow: (userId: number) => void
}

export const User: React.FC<UserProps> = ({ user, handleFollow, handleUnfollow }) => {
  return (
    <Wrapper>
      <FirstChild>
        <AvatarImg
          src={user.photos.small ? user.photos.small : avatar}
          alt='avatar'
        />
        {user.followed ? (
          <SubscribeButton onClick={() => handleUnfollow(user.id)}>
            Followed
          </SubscribeButton>
        ) : (
          <SubscribeButton onClick={() => handleFollow(user.id)}>
            Unfollowed
          </SubscribeButton>
        )}
      </FirstChild>
      <Box>
        <Name>
          <h2>{user.name}</h2>
        </Name>
        <Status>
          <h4>{user.status}</h4>
        </Status>
      </Box>
    </Wrapper>
  )
}
