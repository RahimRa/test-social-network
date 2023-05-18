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
import { follow, unfollow, setUsers } from '../../../store/slices/searchSlice'
import { RootState } from '../../../store/store'

export const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.search)

  return (
    <Wrapper>
      {users.users.map((user) => {
        return (
          <User key={user.id}>
            <FirstChild>
              <Img src={user.photoUrl} alt='avatar' />
              <Button>follow</Button>
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
