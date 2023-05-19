import { Users } from '../../components/SearchUsersPageComponents/Users/Users'
import { Wrapper } from './SearchUsersPage.styles'
import {  setUsers } from '../../store/slices/searchSlice'

export const SearchUsersPage = () => {
  return (
    <Wrapper>
      <Users></Users>
      <button></button>
    </Wrapper>
  )
}
