import styled from 'styled-components'
import { colors } from './colors/colors'

export const App_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Main = styled.div`
  margin-left: 85px;
  min-height: 100vh;
  background-color: ${colors.ligth_black};
  overflow-x: hidden;
  color: ${colors.white};

`
