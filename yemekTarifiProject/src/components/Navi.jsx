import React, { useContext, useState } from 'react'
import '../assets/style/navi.scss'
import DataContext from '../context/DataContext'
import { NavLink } from 'react-router-dom';

const Navi = () => {
  const {kategoriler,setSecilenKategori} = useContext(DataContext);
  return (
    <nav>
        <div className="navSol">
            <h3><NavLink style={({isActive})=>({color: isActive?"greenyellow":"white"})} to="/">Recipe Platform</NavLink></h3>
        </div>

        <div className="navSag">
        {
          kategoriler.map(kategori=>
            <p onClick={(e)=>setSecilenKategori(e.target.innerText)} key={kategori.kategoriId}>{kategori.kategoriAdi}</p>
              
            )
        }
        </div>

        <div className="navSagSag">
          <p><NavLink to="/form">Form</NavLink></p>
          <p><NavLink to="/about">About</NavLink></p>
        </div>
    </nav>
  )
}

export default Navi