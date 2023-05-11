import React, { useState } from 'react'
import {
  Wrapper,
  Img_Wrap,
  Button_Wrap,
  Label,
  InputFile,
  ImagePreview,
} from './AddPhoto.styles'
import { AddPictureIcon } from '../../../../../img/ProfilePageImg/AddPostImg/AddPictureIcon'
import avatars from '../../../../../img/ProfilePageImg/AddPostImg/man-avatars.png'

type Props = {
  imageUrls: string[]
  setImageUrls: (urls: string[]) => void
}

export const AddPhoto = ({ imageUrls, setImageUrls }: Props) => {
  const handleFileChange = (event: any) => {
    const files = event.target.files
    const readers = []

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader()
      reader.onload = () => {
        const newUrls = [...imageUrls, reader.result as string]
        setImageUrls(newUrls)
      }
      reader.readAsDataURL(files[i])
      readers.push(reader)
    }
  }

  return (
    <Wrapper>
      <Img_Wrap>
        {imageUrls.length > 0 ? (
          imageUrls.map((url, index) => (
            <ImagePreview key={index} src={url} alt='Uploaded image preview' />
          ))
        ) : (
          <ImagePreview src={avatars} alt='Uploaded image preview' />
        )}
      </Img_Wrap>
      <Button_Wrap>
        <Label htmlFor='my-file-input'>
          <InputFile
            type='file'
            id='my-file-input'
            onChange={handleFileChange}
            multiple
          />
          <AddPictureIcon />
        </Label>
      </Button_Wrap>
    </Wrapper>
  )
}
