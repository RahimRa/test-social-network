import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
`

export const Icon = styled.img`
  height: 30px;
  width: 30px;
  padding: 5px;
  /* object-fit: cover; */
  border-radius: 5px;
`

export const LinkStyle = styled(Link)`
  text-decoration: none;
  margin: 5px;
  font-size: 15;
  font-weight: 500;
  color: #757474;

  cursor: pointer;
  &:hover {
    color: #d350bb;
  }
`
