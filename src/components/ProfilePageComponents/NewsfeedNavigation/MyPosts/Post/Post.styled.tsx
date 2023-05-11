import styled from 'styled-components'

interface WrapperProps {
  post: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: ${(props) => props.post === false && '500px'};
  transition: 0.2s;
  width: 600px;
`
export const Inner_Wrap = styled.div`
  display: flex;
  gap: 10px;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export const Description_Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const Img_Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  width: 350px;
  gap: 10px;
`
export const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  padding: 5px;
  object-fit: cover;
`
export const PostImg = styled.img`
  height: 90px;
  width: 70px;
  border-radius: 10px;
  &:first-child {
    height: 250px;
    width: 350px;
  }
  object-fit: cover;
`
export const PostItem = styled.span``

export const Like = styled.div``

export const Open = styled.button`
  height: 40px;
  width: 100%;
  background-color: #46444444;
  border: none;
  &:hover {
    background-color: #c325c5;
    transition: 0.1s;
  }
`
export const Icon = styled.img`
  height: 20px;
  width: 20px;
`
