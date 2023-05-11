import { type } from 'os'
import React from 'react'
import { Wrapper, LinkStyle } from './Dialog.syles'

type Props = {
  id: number
  name: string
}


export const Dialog = ({ name, id ,}: Props) => {
  return (
    <Wrapper >
      <LinkStyle to={`/dialogs/${id}`}>{name}</LinkStyle>
    </Wrapper>
  )
}
