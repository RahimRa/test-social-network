import { DialogPage } from './pages/DialogPage/DialogPage'
import { Navbar } from './components/Navbar/Navbar'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
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
          </Routes>
      </Main>
    </App_Wrapper>
  )
}

export default App
