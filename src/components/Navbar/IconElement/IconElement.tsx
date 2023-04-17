import React from 'react'
import { Wrapper, Icon, LinkStyle } from './IconElement.styles'

type IconElementProps = {
  link: string
  title: string
  img: string
}

export const IconElement: React.FC<IconElementProps> = ({
  link,
  title,
  img,
}) => {
  return (
    <LinkStyle to={link}>
      <Wrapper>
        <Icon src={img} />
        {title}
      </Wrapper>
    </LinkStyle>
  )
}
