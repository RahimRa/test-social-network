import { useState } from 'react'
import { Popover } from 'react-tiny-popover'
import { Wrapper, PoopoverData } from './Tooltip.styles'

type TooltipProps = {
  title: string
  Component: () => JSX.Element
}

export const Tooltip: React.FC<TooltipProps> = ({ Component ,title }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  return (
    <Wrapper>
      <Popover
        isOpen={isPopoverOpen}
        onClickOutside={() => setIsPopoverOpen(false)}
        positions={['right']}
        content={() => (
          <PoopoverData>
            <p>{title}</p>
          </PoopoverData>
        )}
      >
        <div
          onMouseEnter={() => setIsPopoverOpen(true)}
          onMouseLeave={() => setIsPopoverOpen(false)}
        >
          <Component />
        </div>
      </Popover>
    </Wrapper>
  )
}
