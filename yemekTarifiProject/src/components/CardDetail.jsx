import React from 'react'
import '../assets/style/cardDetail.scss'
import { Link, useParams } from 'react-router-dom'
import { yemekler } from '../data/data'

const CardDetail = () => {
    const params = useParams()
    // console.log(params);
    // console.log(params.cardDetailId);
    const parametre = params.cardDetailId
  return (
    <div className='cardDetail'>
        <img src={yemekler[parametre-1].image} alt="resim" />
        <h3>{yemekler[parametre-1].title}</h3>
        <p>{yemekler[parametre-1].description}</p>
        <Link to="/">Anasayfaya geri Dönmek için Tıklayınız</Link>
    </div>
  )
}

export default CardDetail