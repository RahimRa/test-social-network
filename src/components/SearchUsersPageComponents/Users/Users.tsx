import {
  Wrapper,
  User,
  FirstChild,
  Img,
  Button,
  Box,
  Name,
  Location,
  Status,
} from './Users.styles'
import { useSelector, useDispatch } from 'react-redux'
import { setUsers, follow, unfollow } from '../../../store/slices/searchSlice'
import { RootState } from '../../../store/store'
import { SearchInterface } from '../../../interfaces/Interfaces'

export const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.search)
console.log(users);

  if (users.users.length === 0) {
    dispatch(setUsers([]))
  }

  const handleFollow = (userId: number) => {
    dispatch(follow(userId))
  }

  const handleUnfollow = (userId: number) => {
    dispatch(unfollow(userId))
  }

  return (
    <Wrapper>
      {users.users.map((user: SearchInterface) => {
        return (
          <User key={user.id}>
            <FirstChild>
              <Img src={user.photoUrl} alt='avatar' />
              {user.followed ? (
                <Button onClick={() => handleUnfollow(user.id)}>
                  Followed
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    handleFollow(user.id)
                  }}
                >
                  Unfollowed
                </Button>
              )}
            </FirstChild>
            <Box>
              <Name>
                <h2> {user.fullName}</h2>
                <Location>
                  <h2>{user.location.country}</h2>
                  <h4>{user.location.city}</h4>
                </Location>
              </Name>
              <Status>
                <h4>{user.status}</h4>
              </Status>
            </Box>
          </User>
        )
      })}
    </Wrapper>
  )
}
