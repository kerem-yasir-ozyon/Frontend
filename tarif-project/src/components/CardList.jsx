import React from 'react'
import Card from './Card'

const CardList = ({yemek}) => {

  return (
    <div className='card-list'>
      {
        data.map(yemek =>
          <Card yemek={yemek} key={yemek.id}/>
        )
      }
    </div>

  )
}

export default CardList