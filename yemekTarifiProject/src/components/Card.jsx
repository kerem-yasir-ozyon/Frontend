import React from 'react'
import '../assets/style/card.scss'

const Card = ({yemek,yemekSil,yemekDuzenle}) => {
  return (
    <div className='mainCard'>
      <div className='card'>
        <div className="img">
          <img src={yemek.image} alt={yemek.title+"_kapak"} />
        </div>
        <div className="yemekAdi">
            <h4>
              {yemek.title}
            </h4>
        </div>
        <div className="yemekAciklamasi">
          <p>{yemek.description}</p>
        </div>
        <div className="btns">
        <button onClick={()=>yemekDuzenle(yemek.id)} className='edit'>Güncelle</button>
        <button onClick={()=>yemekSil(yemek.id)} className='delete'>SİL</button>
        </div>
        
      </div>
    </div>
  )
}

export default Card