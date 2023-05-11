import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: #00000057;

  z-index: 2;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
`
export const Inner_Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  gap: 30px;
  padding: 30px;
  width: 600px;
  background-color: white;
  height: 100%;
`
export const Child = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Child2 = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const Input = styled.input`
  cursor: pointer;
  border: none;

  font-size: 20px;
  height: 50px;
  width: 200px;
  border-bottom: 4px solid #9e9a9ee7;
  padding: 20px;

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
  border: none;
  resize: none;

  border-bottom: 4px solid #9e9a9ee7;
  font-size: 20px;
  height: 150px;
  width: 100%;
  padding: 20px;

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
