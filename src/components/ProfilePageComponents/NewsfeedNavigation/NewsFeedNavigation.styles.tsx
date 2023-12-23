import styled from 'styled-components'
import { colors } from '../../../colors/colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
`
export const Nav = styled.div`
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-radius: 10px;
  gap: 30px;
`

export const BottomBox = styled.div<{ isActive: boolean }>`
  border-bottom: ${(props) =>
    props.isActive && `2px solid ${colors.darck_orange}`};

  &:hover {
    transition: border-bottom 0.2s;
    transform: scale(1.2);
  }
`

export const Link = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: ${colors.ligth_black};
  height: 40px;
  width: 100px;
  &:hover {
    color: ${colors.orange};
  }
`

export const Posts = styled.div`
  display: flex;
  padding: 30px;
  width: 100%;
`
