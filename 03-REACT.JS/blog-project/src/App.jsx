import React from 'react'
import Navi from './components/Navi'
import Anasayfa from './components/Anasayfa'
import Blog from './components/Blog'
import Galeri from './components/Galeri'
import Iletisim from './components/Iletisim'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogDetails from './components/BlogDetails'
import Loading from './components/Loading'

const App = () => {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path='/*' element={<Loading/>}/>
          <Route path='ank' element={<Navi/>}>
              <Route path='anasayfa' element={<Anasayfa/>}/>
              <Route path='blog' element={<Blog/>}/>
              <Route path='blog/:blogId' element={<BlogDetails/>}/>
              <Route path='galeri' element={<Galeri/>}/>
              <Route path='iletisim' element={<Iletisim/>}/>
          </Route>
        
        </Routes>
    </BrowserRouter>
    
  )
}

export default App