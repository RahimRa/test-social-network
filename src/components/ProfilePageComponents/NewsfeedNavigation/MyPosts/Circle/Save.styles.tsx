import styled from 'styled-components'

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    border: 1px solid#c325c5;
    transition: 0.2s;
    transform: scale(1.2);
    svg {
      fill: #c325c5;
    }
  }
`
