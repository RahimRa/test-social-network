import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: 200px;
  width: 100%;
  padding:  10px 0;
`

export const Img_Wrap = styled.div`
  width: 90%;
  padding: 20px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin: 20px 0;
`
export const Button_Wrap = styled.div`
  width: 4%;
`
export const InputFile = styled.input.attrs({ type: 'file' })`
  display: none;
`
export const Label = styled.label`
  cursor: pointer;
`
export const ImagePreview = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  border: 2px solid #868484;
  object-fit: cover;
  &:hover {
    border: solid #c325c5;
    transition: 0.2s;
    transform: scale(1.2);
  }
`
