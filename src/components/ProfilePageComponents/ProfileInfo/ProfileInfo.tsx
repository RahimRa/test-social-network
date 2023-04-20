import {
  Wrapper,
  AvatarDiscription,
  Avatar,
  Name,
  E_mail,
} from './ProfileInfo.styles'

export const ProfileInfo = () => {
  return (
    <Wrapper>
      <AvatarDiscription>
        <Avatar src='http://surl.li/fzhek' alt='Avatar' />
        <Name>Rakhim Dagaev</Name>
      </AvatarDiscription>

      <E_mail>@prostoTed</E_mail>
    </Wrapper>
  )
}
