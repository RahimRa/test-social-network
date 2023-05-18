import React from 'react'
import styled from 'styled-components'
import { colors } from '../colors/colors'

export const HomeIcon = () => {
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
          d='M2495 4786 c-16 -8 -510 -495 -1097 -1083 -1160 -1161 -1091 -1086
-1073 -1180 9 -49 69 -109 118 -118 94 -18 25 -81 1115 1008 l1002 1002 1003
-1002 c1089 -1089 1020 -1026 1114 -1008 49 9 109 69 118 118 18 94 87 19
-1073 1181 -625 625 -1080 1074 -1099 1082 -40 17 -89 17 -128 0z'
        />
        <path
          d='M895 2226 c-41 -18 -83 -69 -90 -109 -3 -18 -4 -282 -2 -587 4 -624
1 -598 82 -765 78 -160 205 -286 369 -365 167 -80 77 -75 1306 -75 1236 0
1140 -6 1315 80 206 102 357 285 422 515 16 60 18 112 18 642 0 567 0 577 -21
604 -39 53 -71 69 -134 69 -63 0 -95 -16 -134 -69 -20 -27 -21 -41 -26 -589
-5 -544 -6 -564 -26 -619 -51 -134 -158 -241 -292 -292 -57 -21 -62 -21 -1087
-24 -738 -2 -1047 0 -1090 8 -69 13 -160 57 -216 103 -52 43 -116 135 -142
205 -21 55 -22 74 -27 619 -5 548 -6 562 -26 589 -11 15 -32 37 -46 47 -33 25
-113 32 -153 13z'
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
