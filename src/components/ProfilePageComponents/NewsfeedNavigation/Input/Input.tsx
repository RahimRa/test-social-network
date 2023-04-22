import { Wrapper,Textarea} from "./Input.styles"
import { Circle } from "./Circle/Circle"
import { CheckIcon } from "../../../../img/ProfilePageImg/CheckIcon"

export const Input = () => {
  return (
    <Wrapper>
      <Textarea />
      <Circle Component={CheckIcon} />
    </Wrapper>
  )
}
