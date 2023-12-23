import React from 'react'
import linksIcon from '../../../img/icons/links.svg'
import rechtIcon from '../../../img/icons/rechts.svg'

import {
  Wrapper,
  PageSwitchButton,
  SwitchingPagesImg,
  Item,
} from './PageSelection.styles'

interface PageSelectionProps {
  pages: number[]
  currentPage: number
}

export const PageSelection: React.FC<PageSelectionProps> = ({
  pages,
  currentPage,
}) => {
  return (
    <Wrapper>
      <PageSwitchButton>
        <SwitchingPagesImg src={linksIcon} alt='linksIcon' />
      </PageSwitchButton>
      {pages.map((numberOfPage) => {
        return (
          <Item
            isActive={currentPage === numberOfPage && true}
            key={numberOfPage}
          >
            {numberOfPage}
          </Item>
        )
      })}
      <PageSwitchButton >
        <SwitchingPagesImg src={rechtIcon} alt='rechtIcon' />
      </PageSwitchButton>
    </Wrapper>
  )
}
