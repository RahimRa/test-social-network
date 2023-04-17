import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`

export const Avatar = styled.img`
  position: absolute;
  left: 100px;
  top: 170px;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background-color: white;
  padding: 2px;
  object-fit: cover;
  border-radius: 10px;
`
export const Img = styled.img`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  object-fit: cover;
`
