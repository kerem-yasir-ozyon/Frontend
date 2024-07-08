import React from 'react'
import Logo from '../assets/logo.jpg'
let developer = "Developer"

const Header = () => {
  return (  
    <>
    <h2>Hello React {developer}</h2>
    <img src={Logo} alt="resim" width={200} />
    <h3>JSX Özellikleri</h3>
    </>
  )
}

export default Header