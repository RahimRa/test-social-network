import React from 'react'
import styled from 'styled-components'
import { colors } from '../colors/colors'

export const MusicIcon = () => {
  return (
    <Svg
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      width='50'
      height='50'
      fill={colors.ligth_black}
      viewBox='0 0 512.000000 512.000000'
      preserveAspectRatio='xMidYMid meet'
    >
      <g
        transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
        stroke='#ffffff'
      >
        <path
          d='M2331 4789 c-928 -97 -1709 -788 -1941 -1719 -63 -252 -63 -254 -67
-1090 -3 -421 -2 -779 2 -797 10 -56 51 -91 186 -159 l129 -64 0 -146 c0 -182
-4 -176 177 -233 72 -23 133 -41 137 -41 3 0 6 261 6 580 0 319 -3 580 -6 580
-4 0 -65 -18 -137 -41 -83 -26 -138 -49 -153 -64 l-24 -24 0 542 c0 559 5 658
41 837 78 391 303 779 605 1044 251 221 577 385 885 445 209 41 390 51 577 30
907 -99 1622 -831 1722 -1761 5 -54 10 -328 10 -618 l0 -521 -22 24 c-16 17
-66 39 -160 70 l-138 46 0 -585 c0 -321 3 -584 6 -584 3 0 65 19 137 42 182
58 177 51 177 232 l0 146 129 64 c135 68 176 103 186 159 4 18 5 388 3 822 -4
686 -6 802 -21 885 -66 371 -172 639 -365 925 -369 547 -961 902 -1624 974
-113 13 -336 12 -457 0z'
        />
        <path
          d='M1145 1895 l-25 -24 0 -751 0 -751 25 -24 24 -25 271 0 271 0 24 25
25 24 0 751 0 751 -25 24 -24 25 -271 0 -271 0 -24 -25z'
        />
        <path
          d='M3385 1895 l-25 -24 0 -751 0 -751 25 -24 24 -25 271 0 271 0 24 25
25 24 0 751 0 751 -25 24 -24 25 -271 0 -271 0 -24 -25z'
        />
      </g>
    </Svg>
  )
}

export const Svg = styled.svg`
  path {
    stroke: #ffffff;
    stroke-width: 1px;
  }
  cursor: pointer;
  &:hover {
    fill: ${colors.orange};
    transition: 0.2s;
    transform: scale(1.2);
  }
`
