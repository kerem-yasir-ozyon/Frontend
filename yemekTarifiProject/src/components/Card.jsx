import React, { useContext } from 'react'
import '../assets/style/card.scss'
import DataContext from '../context/DataContext'
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Card = ({yemek}) => {
  const {yemekSil,yemekDuzenle,search} = useContext(DataContext);
  return (
    (yemek.title.toLowerCase().startsWith(search.toLowerCase())||
    yemek.description.toLowerCase().startsWith(search.toLowerCase())
    )&&
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
        <Link to="/form" onClick={()=>yemekDuzenle(yemek.id)} className='edit'><FaRegEdit size={20} /></Link>
        <Link to={yemek.id} key={yemek.id} onClick={()=>yemekDuzenle(yemek.id)} className='detay'>Detay</Link>
        <button onClick={()=>yemekSil(yemek.id)} className='delete'><FaRegTrashCan size={20} />
        </button>
        </div>
        
      </div>
    </div>
  )
}

export default Card