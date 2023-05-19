import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 10px;
`
export const User = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 150px;
  width: 100%;
`

export const FirstChild = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`

export const Img = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  object-fit: cover;
`
export const Button = styled.button`
  cursor: pointer;
  border: none;
  height: 40px;
  width: 70px;
  border-radius: 10px;
  background-color: orange;
  &:hover {
    background-color: #d59319;
    transition: 0.2s;
    transform: scale(1.2);
  }
`
export const Box = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease-in-out;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
`
export const Name = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const Location = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 30px;
  align-items: flex-end;
`
export const Status = styled.div``
