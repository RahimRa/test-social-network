import { useState } from 'react'
import downIcon from '../../../../../img/ProfilePageImg/postsImg/downIcon.svg'
import upIcon from '../../../../../img/ProfilePageImg/postsImg/upIcon.svg'
import {
  Wrapper,
  Inner_Wrap,
  Description_Wrap,
  Img_Wrap,
  Avatar,
  PostImg,
  PostItem,
  Like,
  Open,
  Icon,
} from './Post.styled'

type Props = {
  description: string
  likesCount: number
  userName: string
  postName: string
  postImgs: string[]
  lastname: string
}

export const Post = ({
  description,
  likesCount,
  lastname,
  userName,
  postImgs,
  postName,
}: Props) => {
  const [post, setPost] = useState<boolean>(false)

  const Img = postImgs.map((img) => {
    return <PostImg src={img} />
  })

  return (
    <Wrapper post={post}>
      <Inner_Wrap>
        <Avatar src='http://surl.li/gafex' />
        <Description_Wrap>
          <h3>{userName + ' ' + lastname}</h3>
          <h4>{postName}</h4>
          <Img_Wrap>{Img}</Img_Wrap>
          <PostItem>{description}</PostItem>
          <Like>Like: {likesCount}</Like>
        </Description_Wrap>
      </Inner_Wrap>

      <Open onClick={() => setPost(!post)}>
        <Icon src={post ? upIcon : downIcon} />
      </Open>
    </Wrapper>
  )
}
