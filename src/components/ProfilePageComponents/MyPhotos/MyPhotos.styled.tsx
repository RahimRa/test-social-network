import styled from 'styled-components'
import { colors } from '../../../colors/colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 200px;
  padding: 20px;
  margin: 20px;
  background-color: ${colors.white};
  border-radius: 10px;
`
export const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: ${colors.ligth_black};
`
export const Line = styled.div`
  height: 2px;
  width: 50px;
  background-color: ${colors.ligth_black};
`
export const Myphoto_Wrapp = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin: 40px;
  padding: 10px;
  width: 100%;
`
export const Photo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    transition: 0.2s;
    transform: scale(1.2);
  }
`
