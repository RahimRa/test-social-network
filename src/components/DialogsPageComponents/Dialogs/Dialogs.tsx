import { useSelector } from 'react-redux'
import { Wrapper } from './Dialogs.styles'
import { RootState } from '../../../store/store'
import { Dialog } from './Dialog/Dialog'


export const Dialogs = () => {
  const persons = useSelector((state: RootState) => state.dialogs)


  let dialogsElements = persons.map((person) => (
    <Dialog id={person.id} name={person.name}   />
  ))
  return <Wrapper>{dialogsElements}</Wrapper>
}
