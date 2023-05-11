import styled from 'styled-components'

export const Wrapper = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Message = styled.div``

export const AddMessage_Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 4px solid #9e9a9ee7;

  &:hover {
    border-bottom: solid #c325c5;
    transition: 0.1s;
  }

  &:focus {
    outline: none;
    border: none;
    border-bottom: solid #c325c5;
  }
`

export const Textarea = styled.textarea`
  flex-basis: 90%;
  border: none;
  resize: none;

  height: 100%;
  font-size: 20px;
  padding: 20px;

  &:focus {
    outline: none;
    border: none;
  }
`
export const Icon_container = styled.div`
  flex-basis: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px;
  background-color: #928e8e9a;

  &:hover {
    background-color: #c325c5;
    transition: 0.1s;
    svg {
      fill: white;
      transition: 0.2s;
      transform: scale(1.2);
    }
  }
`
