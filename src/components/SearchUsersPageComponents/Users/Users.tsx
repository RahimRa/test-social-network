import React, { Component } from 'react'
import {
  Wrapper,

} from './Users.styles'
import { connect } from 'react-redux'
import { setUsers, follow, unfollow } from '../../../store/slices/searchSlice'
import { RootState } from '../../../store/store'
import {  IUser } from '../../../interfaces/Interfaces'
import axios from 'axios'
import { PageSelection } from '../PageSelection/PageSelection'
import { User } from '../User/User'

interface Props {
  users: IUser[]
  dispatch: any
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

class Users extends Component<Props> {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.dispatch(setUsers(response.data.items))
      })
  }

  handleFollow = (userId: number) => {
    this.props.dispatch(follow(userId))
  }

  handleUnfollow = (userId: number) => {
    this.props.dispatch(unfollow(userId))
  }

  render() {
    const { users } = this.props

    let pagesCount = this.props.totalUsersCount / this.props.pageSize
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <Wrapper>
        <PageSelection pages={pages} currentPage={this.props.currentPage} />

        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            handleFollow={this.handleFollow}
            handleUnfollow={this.handleUnfollow}
          />
        ))}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  users: state.search.users,
  pageSize: state.search.pageSize,
  totalUsersCount: state.search.totalUsersCount,
  currentPage: state.search.currentPage,
})

export default connect(mapStateToProps)(Users)
