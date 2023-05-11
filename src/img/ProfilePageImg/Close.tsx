import styled from 'styled-components'

type Props = {
  click: () => void
}

export const Close = ({ click }: Props) => {
  return (
    <Svg
      onClick={click}
      version='1.1'
      id='Capa_1'
      x='0px'
      y='0px'
      viewBox='0 0 512.021 512.021'
      width='20'
      height='20'
    >
      <g>
        <path d='M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z' />
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
    fill: #c325c5;
    transition: 0.2s;
    transform: scale(1.2);
  }
`
