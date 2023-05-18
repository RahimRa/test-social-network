import React from 'react'
import styled from 'styled-components'
import { colors } from '../colors/colors'

export const Search = () => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      id='Outline'
      viewBox='0 0 24 24'
      width='50'
      height='50'
      fill={colors.ligth_black}
    >
      <path d='M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z' />
    </Svg>
  )
}

export const Svg = styled.svg`
  cursor: pointer;
  &:hover {
    fill: ${colors.orange};
    transition: 0.2s;
    transform: scale(1.2);
  }
`
