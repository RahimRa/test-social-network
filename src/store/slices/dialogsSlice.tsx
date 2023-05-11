import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DialogsInterface } from '../../interfaces/Interfaces'

const initialState: DialogsInterface[] = [
  {
    name: 'Dimych',
    message: 'How are you?',
    id: 1,
  },
  {
    name: 'Andrey',
    message: 'How is you it-kamasutra?',
    id: 2,
  },
  {
    name: 'Sasha',
    message: 'Yo',
    id: 3,
  },
  {
    name: 'Sveta',
    message: 'Hi',
    id: 4,
  },
  {
    name: 'Valera',
    message: 'Hi',
    id: 5,
  },
]

const dialogsSlise = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<DialogsInterface>) {
      return [...state, action.payload]
    },
  },
})

export const { addMessage } = dialogsSlise.actions
export default dialogsSlise.reducer
