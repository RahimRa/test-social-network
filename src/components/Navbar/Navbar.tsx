import { NavbarLink } from '../../interfaces/Interfaces'
import { HomeIcon } from '../../img/HomeIcon'
import { ProfileIcon } from '../../img/ProfileIcon'
import { MessagesIcon } from '../../img/MessagesIcon'
import { MusicIcon } from '../../img/Music'
import { SettingsIcon } from '../../img/SettingsIcon'
import { LinkStyle, Wrapper } from './Navbar.styles'
import { Tooltip } from '../Tooltip/Tooltip'

export const Navbar: React.FC = () => {
  const linksData: NavbarLink[] = [
    {
      title: 'Home',
      link: '/dialogs',
      Component: HomeIcon,
    },
    {
      title: 'Profile',
      link: '/profile',
      Component: ProfileIcon,
    },
    {
      title: 'Messeges',
      link: '/dialogs',
      Component: MessagesIcon,
    },
    {
      title: 'Music',
      link: '/dialogs',
      Component: MusicIcon,
    },
    {
      title: 'Settings',
      link: '/dialogs',
      Component: SettingsIcon,
    },
  ]

  let IconElements = linksData.map(({ link, Component, title }) => {
    return (
      <LinkStyle to={link}>
        <Tooltip Component={Component} title={title} />
      </LinkStyle>
    )
  })

  return <Wrapper>{IconElements}</Wrapper>
}
