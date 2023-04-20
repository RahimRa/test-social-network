import { CheckIcon } from '../../../../../img/ProfilePageImg/CheckIcon'
import { ButtonSave } from './ButtonSave.styles'

export const Save = () => {
  return (
    <ButtonSave onClick={() => console.log(1)}>
      <CheckIcon />
    </ButtonSave>
  )
}
