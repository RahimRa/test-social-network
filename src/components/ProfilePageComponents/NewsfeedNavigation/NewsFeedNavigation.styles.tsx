import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const Elem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = styled.div`
  font-size: 15px;
  font-weight: 300;
  color: #292727;
`

export const Line = styled.div`
  height: 2px;
  width: 50px;
  background-color: #292727;

  &:hover {
    background-color: #c325c5;
    transition: 0.2s;
    transform: scale(1.2);
  }
`
