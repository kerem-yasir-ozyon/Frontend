import React from 'react';
import '../assets/style/cardDetail.scss';
import { Link, useParams } from 'react-router-dom';
import { yemekler } from '../data/data';

const CardDetail = () => {
    const { cardDetailId } = useParams();
    const parametre = parseInt(cardDetailId, 10); // params.cardDetailId'yi sayıya dönüştür

    if (!Number.isInteger(parametre) || parametre < 1 || parametre > yemekler.length) {
        return (
            <div className='cardDetail'>
                <h3>Geçersiz Kart ID</h3>
                <Link to="/">Anasayfaya geri dönmek için tıklayınız</Link>
            </div>
        );
    }

    const yemek = yemekler[parametre - 1];

    return (
        <div className='cardDetail'>
            <img src={yemek.image} alt="resim" />
            <h3>{yemek.title}</h3>
            <p>{yemek.description}</p>
            <Link to="/">Click to return to the home page</Link>
        </div>
    );
};

export default CardDetail;
