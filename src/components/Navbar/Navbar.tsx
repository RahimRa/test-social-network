import { NavbarLink } from '../../interfaces/Interfaces'
import { HomeIcon } from '../../img/HomeIcon'
import { ProfileIcon } from '../../img/ProfileIcon'
import { MessagesIcon } from '../../img/MessagesIcon'
import { MusicIcon } from '../../img/Music'
import { SettingsIcon } from '../../img/SettingsIcon'
import { LinkStyle, Wrapper } from './Navbar.styles'

export const Navbar: React.FC = () => {
  const linksData: NavbarLink[] = [
    {
      link: '/dialogs',
      Component: HomeIcon,
    },
    {
      link: '/profile',
      Component: ProfileIcon,
    },
    {
      link: '/dialogs',
      Component: MessagesIcon,
    },
    {
      link: '/dialogs',
      Component: MusicIcon,
    },
    {
      link: '/dialogs',
      Component: SettingsIcon,
    },
  ]

  

  let IconElements = linksData.map(({ link, Component }) => {
    return (
      <LinkStyle to={link}>
        <Component />
      </LinkStyle>
    )
  })

  return <Wrapper>{IconElements}</Wrapper>
}
