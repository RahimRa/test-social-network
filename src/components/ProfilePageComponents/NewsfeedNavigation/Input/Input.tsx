import { Wrapper, Textarea } from './Input.styles'
import { Button } from '../../Button/Button'
import { CheckIcon } from '../../../../img/ProfilePageImg/CheckIcon'

export const Input = () => {
  return (
    <Wrapper>
      <Textarea />
      <Button
        component={<CheckIcon />}
        onClick={() => {
          console.log(1)
        }}
      />
    </Wrapper>
  )
}
