import styled from 'styled-components'
import { colors } from '../../../colors/colors'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const PageSwitchButton = styled.button`
  border-radius: 50%;
  border: none;
  height: 30px;
  width: 30px;
  &:hover {
    background-color: ${colors.darck_orange};
    transition: 0.2s;
    transform: scale(1.2);
  }
`
export const SwitchingPagesImg = styled.img`
  height: 10px;
  width: 10px;
`


export const Item = styled.span<{ isActive: boolean }>`
  color: ${(props) =>
    props.isActive ? `${colors.darck_orange}` : `${colors.white}`};
`
