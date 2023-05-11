import styled from 'styled-components'
import { Link } from 'react-router-dom'



export const Wrapper = styled.div`

  display: flex;
  align-items: center;
  background-color: #928e8e9a;
  height: 50px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #c325c5;
    transition: 0.1s;
  }
`

export const LinkStyle = styled(Link)`
  text-decoration: none;
  margin: 5px;
  font-size: 17;
  font-weight: 500;
  color: white;
`
