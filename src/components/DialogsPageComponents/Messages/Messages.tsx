import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store/store'
import { addMessage } from '../../../store/slices/dialogsSlice'
import {
  Wrapper,
  Message,
  AddMessage_Wrap,
  Textarea,
  Icon_container,
} from './Messages.styles'
import { SendMessageIcon } from '../../../img/SendMessageIcon'

export const Messages = () => {
  const dispatch = useDispatch()
  const messages = useSelector((state: RootState) => state.dialogs)
  const user = useSelector((state: RootState) => state.user)
  const [message, setMessage] = useState<string>('')


  let messagesElements = messages.map((m) => <Message>{m.message}</Message>)
  return (
    <Wrapper>
      {messagesElements}
      <AddMessage_Wrap>
        <Textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder='Add message'
        />
        <Icon_container>
          <SendMessageIcon
            click={() => {
              dispatch(
                addMessage({
                  id: 4,
                  name: user.userName,
                  message: message,
                })
              )
              setMessage('')
            }}
          />
        </Icon_container>
      </AddMessage_Wrap>
    </Wrapper>
  )
}
