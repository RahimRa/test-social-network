import { useState } from 'react'
import { RootState } from '../../../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { setPost } from '../../../../store/slices/profileSlice'
import { AddPhoto } from './AddPhoto/AddPhoto'
import { SendMessageIcon } from '../../../../img/SendMessageIcon'
import {
  Wrapper,
  Inner_Wrap,
  Child,
  Child2,
  Input,
  Textarea,
} from './AddPost.styles'

type Props = {
  icon: JSX.Element
}

export const AddPost = ({ icon }: Props) => {
  let users = useSelector((state: RootState) => state.profile)
  let posts = useSelector((state: RootState) => state.profile.myPosts)

  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrls, setImageUrls] = useState<string[]>([])

  return (
    <Wrapper>
      <Inner_Wrap>
        <Child>
          <h1>New post</h1>
          {icon}
        </Child>
        <Input
          placeholder='Post Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Textarea
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <AddPhoto imageUrls={imageUrls} setImageUrls={setImageUrls} />
        <Child2>
          <SendMessageIcon
            click={() => {
              dispatch(
                setPost({
                  postImgs: imageUrls,
                  description: description,
                  postName: name,
                  likesCount: 0,
                })
              )
            }}
          />
        </Child2>
      </Inner_Wrap>
    </Wrapper>
  )
}
