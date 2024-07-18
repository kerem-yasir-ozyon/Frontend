import React from 'react'
import Card from './Card'

const CardList = ({yemekler,yemekSil,yemekDuzenle}) => {
  
  return (
    <div className='card-list'>
      {
        yemekler.map(yemek=>
          !yemek.isDeleted &&
          <Card yemek={yemek} yemekSil={yemekSil} yemekDuzenle={yemekDuzenle} key={yemek.id}/>

        )
      }
    </div>
  )
}

export default CardList