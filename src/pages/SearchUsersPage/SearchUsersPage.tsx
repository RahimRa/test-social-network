import Users from '../../components/SearchUsersPageComponents/Users/Users'
import { Wrapper, Button  } from './SearchUsersPage.styles'
// import { MyLoader } from '../../components/MyLoader/MyLoader'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'

export const SearchUsersPage = () => {
  const U: JSX.Element = <></>

  return (
    <Wrapper>
      <Users />
      {/* <Button>Next</Button> */}
    </Wrapper>
  )
}
