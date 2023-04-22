import { Wrapper } from './Circle.styles'

type CircleProps = {
  Component: () => JSX.Element
}
export const Circle: React.FC<CircleProps> = ({ Component }) => {
  return (
    <Wrapper>
      <Component />
    </Wrapper>
  )
}
