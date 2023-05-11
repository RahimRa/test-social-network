import { Wrapper } from './Button.styles'

type ButtonProps = {
  component: JSX.Element
  onClick: () => void
}
export const Button: React.FC<ButtonProps> = ({ component, onClick }) => {
  return <Wrapper onClick={onClick}>{component}</Wrapper>
}
