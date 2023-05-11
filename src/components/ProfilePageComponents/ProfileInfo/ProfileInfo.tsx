import {
  Wrapper,
  AvatarDescription,
  Avatar,
  Name,
  E_mail,
} from './ProfileInfo.styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

export default () => {
  let users = useSelector((state: RootState) => state.user)

  return (
    <Wrapper>
      <AvatarDescription>
        <Avatar src='http://surl.li/fzhek' alt='Avatar' />
        <Name>{users.userName + ' ' + users.lastname}</Name>
      </AvatarDescription>

      <E_mail>{users.email}</E_mail>
    </Wrapper>
  )
}
