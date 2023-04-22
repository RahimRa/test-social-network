import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 85px;
  margin-top: 80px;
  padding-top: 50px;
  background-color: #ffffff;
`

export const LinkStyle = styled(Link)`
  text-decoration: none;
  margin: 5px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  font-size: 15;
  font-weight: 500;
`
