import Navi from './components/Navi'
import Head from './components/Head'
import CardList from './components/CardList'
import Form from './components/Form'
import About from './components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Anasayfa from './components/Anasayfa'
import CardDetail from './components/CardDetail'
import LoginPage from './components/LoginPage'
import { AuthProvider } from './context/AuthContext'


const App = () => {




  return (
    <AuthProvider>
        <BrowserRouter>
            <Navi/>
            <Routes>
              <Route path='/' element={<Anasayfa/>}/>
              <Route path='/head' element={<Head/>}/>
              <Route path='/form' element={<Form/>}/>
              <Route path='/cardList' element={<CardList/>}/>
              <Route path='/:cardDetailId' element={<CardDetail/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/loginPage' element={<LoginPage/>}/>
            </Routes>
      </BrowserRouter>
    </AuthProvider>
    
  )
}

export default App
