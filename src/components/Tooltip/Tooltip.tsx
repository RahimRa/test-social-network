import { useState } from 'react'
import { Popover } from 'react-tiny-popover'
import { ProfileIcon } from '../../img/ProfileIcon'
import { Wrapper, PoopoverData } from './Tooltip.styles'

type TooltipProps = {
  Component: ()=> JSX.Element
}

export const Tooltip: React.FC<TooltipProps> = ({ Component }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  return (
    <Wrapper>
      <Popover
        isOpen={isPopoverOpen}
        onClickOutside={() => setIsPopoverOpen(false)}
        positions={['right']}
        content={() => (
          <PoopoverData>
            <p>Profile</p>
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
