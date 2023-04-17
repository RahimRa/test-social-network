import { Names } from '../../interfaces/Interfaces'
import { Dialog } from './Dialog/Dialog'

import { Wrapper, DialogsItems, Messeges, Messege } from './Dialogs.styled'

export const DialogPage: React.FC = () => {
  const arr: Names[] = [
    {
      name: 'Dimych',
      messege: 'How are you?',
      id: 1,
    },
    {
      name: 'Andrey',
      messege: 'How is you it-kamasutra?',
      id: 2,
    },
    {
      name: 'Sasha',
      messege: 'Yo',
      id: 3,
    },
    {
      name: 'Sveta',
      messege: 'Hi',
      id: 4,
    },
    {
      name: 'Valera',
      messege: 'Hi',
      id: 5,
    },
  ]
  let dialogsElements = arr.map((dialog) => (
    <Dialog id={dialog.id} name={dialog.name} />
  ))
  let messegesElements = arr.map((m) => <Messege>{m.messege}</Messege>)

  return (
    <Wrapper>
      <DialogsItems>{dialogsElements}</DialogsItems>
      <Messeges>{messegesElements}</Messeges>
    </Wrapper>
  )
}
