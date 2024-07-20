import React from 'react'
import '../assets/style/navi.scss'

const Navi = ({kategoriler,setSecilenKategori}) => {
  return (
    <nav>
        <div className="navSol">
            <h3>
                Recipe Platform
            </h3>
        </div>
        <div className="navSag">
        {
          kategoriler.map(kategori=>
              <p onClick={(e)=>setSecilenKategori(e.target.innerText)} key={kategori.kategoriId}>{kategori.kategoriAdi}</p>
            )
        }
        </div>
    </nav>
  )
}

export default Navi