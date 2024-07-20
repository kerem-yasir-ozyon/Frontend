import React from 'react'
import Card from './Card'

const CardList = ({yemekler,yemekSil,secilenKategori,yemekDuzenle}) => {
  
  return (
    <>
      <h3 style={{marginLeft:"25px"}}>{secilenKategori}</h3>
      <div className='card-list'>
      {
        yemekler.map(yemek=>
          (yemek.category === secilenKategori || secilenKategori === "All Food") &&
          (
            !yemek.isDeleted &&
            <Card yemek={yemek} yemekSil={yemekSil} yemekDuzenle={yemekDuzenle} key={yemek.id}/>
          )

        )
      }
    </div>
    </>
    
  )
}

export default CardList