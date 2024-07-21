import Navi from './components/Navi'
import Head from './components/Head'
import CardList from './components/CardList'
import Form from './components/Form'
import About from './components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Anasayfa from './components/Anasayfa'
import CardDetail from './components/CardDetail'


const App = () => {




  return (
    <BrowserRouter>
      <Navi/>
      <Routes>
        <Route path='/' element={<Anasayfa/>}/>
        <Route path='/head' element={<Head/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/cardList' element={<CardList/>}/>
        <Route path='/:cardDetailId' element={<CardDetail/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

      

    </BrowserRouter>
  )
}

export default App
