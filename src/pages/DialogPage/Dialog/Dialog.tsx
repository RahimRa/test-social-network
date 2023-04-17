import { type } from 'os'
import React from 'react'
import { Wrapper, LinkStyle } from './Dialog.syles'

type Names = {
  id: number
  name: string
}
export const Dialog: React.FC<Names> = ({ name ,id}) => {
  return (
    <Wrapper>
      <LinkStyle to={`/dialogs/${id}`}>{name}</LinkStyle>
    </Wrapper>
  )
}
