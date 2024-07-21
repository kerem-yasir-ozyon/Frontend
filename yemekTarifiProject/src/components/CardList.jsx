import React, { useContext } from 'react'
import Card from './Card'
import DataContext from '../context/DataContext'
import SearchBar from './SearchBar';

const CardList = () => {
  const {yemekler,secilenKategori} = useContext(DataContext);
  
  return (
    <>
    <SearchBar/>
      
      <div className='card-list'>
      {
        yemekler.map(yemek=>
          (yemek.category === secilenKategori || secilenKategori === "All Food") &&
          (
            !yemek.isDeleted &&
            <Card yemek={yemek}  key={yemek.id}/>
          )

        )
      }
    </div>
    </>
    
  )
}

export default CardList