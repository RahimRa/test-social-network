import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const Info_Wrap = styled.div`
  position: absolute;
  left: 40px;
  top: 160px;
`
export const Img = styled.img`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  object-fit: cover;
`
export const Main = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: center;
`
export const Child1 = styled.div`
  flex-basis: 20%;
`

export const Child2 = styled.div`
  flex-basis: 80%;
`
