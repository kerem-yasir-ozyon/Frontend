import React from 'react'
import Card from './Card'

const CardList = ({yemekler,yemekSil}) => {
  
  return (
    <div className='card-list'>
      {
        yemekler.map(yemek=>
          <Card yemek={yemek} yemekSil={yemekSil} key={yemek.id}/>
        )
      }
    </div>
  )
}

export default CardList