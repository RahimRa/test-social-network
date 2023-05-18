import React from 'react'
import styled from 'styled-components'
import { colors } from '../colors/colors'

export const MessagesIcon = () => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      id='Outline'
      viewBox='0 0 24 24'
      width='50'
      height='50'
      fill={colors.ligth_black}
    >
      <path d='M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z' />
    </Svg>
  )
}

export const Svg = styled.svg`
  path {
    stroke: #ffffff;
    stroke-width: 0.5px;
  }
  cursor: pointer;
  &:hover {
    fill: ${colors.orange};
    transition: 0.2s;
    transform: scale(1.2);
  }
`
