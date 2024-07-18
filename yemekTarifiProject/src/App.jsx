import { useEffect, useState } from 'react'
import Navi from './components/Navi'
import Head from './components/Head'
import CardList from './components/CardList'
import Form from './components/Form'
import axios from 'axios'


const App = () => {

  const [yemekler,setYemekler] = useState([]);
  const [secilenYemek,setsecilenYemek] = useState("");

  const yemekEkle = async (yeni) => {
    // frontende ekleme işlemi
    setYemekler(prev=>[...prev,yeni]) 
    // backendde ekleme işlemi
    const url = "http://localhost:3007/yemekler";
    const response = await axios.post(url,yeni);
  }

  const yemekSil = async (id) =>{
    // frontende silme işlemi
    setYemekler(prev=>prev.filter(statedenGelen=>statedenGelen.id !== id));
    //backendde silme işlemi
    const url = `http://localhost:3007/yemekler/${id}`
    // const response = await axios.delete(url); tehlikeli veriyi kullanıcının veriyi databasedende silmessini saglar
    const response = await axios.patch(url,{isDeleted: true});
  }

  const yemekleriGetir = async () => {
    const url = "http://localhost:3007/yemekler"
    const response = await fetch(url);
    const yemekler = await response.json();
    setYemekler(yemekler);
  }

  const yemekDuzenle = (id) =>{
    setsecilenYemek(yemekler.find(item=>item.id===id))
    console.log(yemekler.find(item=>item.id===id));
  }

  useEffect(()=>{
    yemekleriGetir()
  },[])

  return (
    <>
      <Navi/>
      <Head/>
      <Form secilenYemek={secilenYemek} yemekEkle={yemekEkle} yemekler={yemekler}/>
      <CardList yemekler={yemekler} yemekSil={yemekSil} yemekDuzenle={yemekDuzenle}/>
    </>
  )
}

export default App
