import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  gap: 30px;
`
export const Link = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-weight: 300;
  color: #292727;
  height: 60px;
  width: 60px;
  border-radius: 10px;
  margin: 15px;
  background-color: ${(props) => props.isActive && '#c225c58c'};
  &:hover {
    background-color: #c225c58c;
    transition: 0.2s;
    transform: scale(1.2);
  }
`

export const Line = styled.div`
  height: 2px;
  width: 50px;
  background-color: #292727;
`
