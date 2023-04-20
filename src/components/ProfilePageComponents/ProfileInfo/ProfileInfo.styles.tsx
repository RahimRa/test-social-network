import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;
`
export const AvatarDiscription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid #ffffff;
`
export const Name = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding: 2px;
  color: #000000;
`
export const E_mail = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: white;
  background-color: #aba5a5af;
  padding: 2px;
  border-radius: 10px;
`
