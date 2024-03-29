import { DialogPage } from './pages/DialogPage/DialogPage'
import { Navbar } from './components/Navbar/Navbar'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { SearchUsersPage } from './pages/SearchUsersPage/SearchUsersPage'
import { App_Wrapper, Main } from './styles'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'

function App() {



  return (
    <App_Wrapper>
      <Header />
      <Navbar />
      <Main>
        <Routes>
          <Route path='/profile/*' element={<ProfilePage />} />
          <Route path='/dialogs/*' element={<DialogPage />} />
          <Route path='/users/*' element={<SearchUsersPage />} />
        </Routes>
      </Main>
    </App_Wrapper>
  )
}

export default App
