import { Dialogs } from '../../components/DialogsPageComponents/Dialogs/Dialogs'
import { Messages } from '../../components/DialogsPageComponents/Messages/Messages'

import { Wrapper } from './Dialogs.styled'

export const DialogPage: React.FC = () => {
  return (
    <Wrapper>
      <Dialogs />
      <Messages />
    </Wrapper>
  )
}
