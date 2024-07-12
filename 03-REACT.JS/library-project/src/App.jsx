import React, { useEffect, useState } from 'react'
import Navi from './components/Navi'
import Forms from './components/Forms'
import CardList from './components/CardList'
import axios from 'axios'

const App = () => {
  const companyName = "ASD LIBRARY";
  
  //const[stateAdi,stateMetodu] = useState(initialValue);
  const [kitaplar,setKitaplar] = useState([]);
  const [kategoriler,setKategoriler] = useState([])
  const [secilenKategori,setSecilenKategori] = useState("Tüm Kitaplar");

  const kitapEkle = async(yeni) => {
    setKitaplar(prev=>[...prev,yeni]);
    const url = "http://localhost:3005/kitaplar";
    const response = await axios.post(url,yeni);
    console.log(response);
  }

  const kitapSil = async (id) => {
    setKitaplar(prev=>prev.filter(statedenGelen => statedenGelen.id !== id));
    const url = `http://localhost:3005/kitaplar/${id}`;
    const response = await axios.delete(url);
  }

  const kitaplariGetir = async () => {
    const url = "http://localhost:3005/kitaplar"
    const response = await fetch(url);
    const kitaplar = await response.json();
    setKitaplar(kitaplar);
  }

  const kategorileriGetir = async() =>{
    const url = "http://localhost:3005/kategoriler"
    const response = await axios.get(url);
    const kategoriler = await response.data;
    setKategoriler(kategoriler);
  }

  useEffect(()=>{
    kitaplariGetir();
    kategorileriGetir();
  },[])
  // kitaplariGetir();

  return (
    <>
      <Navi navHead = {companyName} kategoriler={kategoriler} setSecilenKategori={setSecilenKategori}/>
      <Forms kitapEkle ={kitapEkle} kitaplar={kitaplar} />
      <CardList kitaplar = {kitaplar} kitapSil={kitapSil} secilenKategori={secilenKategori}/>
      {companyName}
    </>
  )
}

export default App