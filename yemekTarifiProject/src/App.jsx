import { useEffect, useState } from 'react'
import Navi from './components/Navi'
import Head from './components/Head'
import CardList from './components/CardList'
import Form from './components/Form'
import axios from 'axios'


const App = () => {

  const [yemekler,setYemekler] = useState([]);
  const [secilenYemek,setsecilenYemek] = useState("");
  const [kategoriler,setKategoriler] = useState([]);
  const [secilenKategori,setSecilenKategori] = useState("All Food");

  const yemekEkle = async (yeni) => {
    let url = "http://localhost:3007/yemekler";
    if (!secilenYemek) { 
      setYemekler(prev=>[...prev,yeni])  
      const response = await axios.post(url,yeni);
    }
    else{
      url += `/${secilenYemek.id}`;
      const response2 = await axios.put(url,yeni)
      setYemekler(prev=>
        prev.map(yemek=>{
          if (yemek.id === secilenYemek.id) {
            return {...response2.data}
          }
          else{
            return {...yemek}
          }
        })
      )
      setsecilenYemek("");
    }
    
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
    let url = "http://localhost:3007/yemekler";
    const response = await fetch(url);
    const yemekler = await response.json();
    setYemekler(yemekler);
  }
  // const yemekleriGetir = async () => {
  //   let url = "http://localhost:3007/yemekler";
  //   if (secilenKategori && secilenKategori !== "All Food") {
  //     url+=`?category=${secilenKategori}`
  //   }
  //   const response = await fetch(url);
  //   const yemekler = await response.json();
  //   setYemekler(yemekler);
  // }

  const yemekDuzenle = (id) =>{
    setsecilenYemek(yemekler.find(item=>item.id===id))
    console.log(yemekler.find(item=>item.id===id));
  }

  const kategorileriGetir = async () => {
    const url = "http://localhost:3007/kategoriler";
    const response = await axios.get(url);
    const kategoriler = await response.data;
    setKategoriler(kategoriler);
  }

  useEffect(()=>{
    kategorileriGetir();
    yemekleriGetir();
  },[])


  return (
    <>
      <Navi kategoriler={kategoriler} setSecilenKategori={setSecilenKategori}/>
      <Head/>
      <Form secilenYemek={secilenYemek} yemekEkle={yemekEkle} yemekler={yemekler}/>
      <CardList yemekler={yemekler} yemekSil={yemekSil} yemekDuzenle={yemekDuzenle} secilenKategori={secilenKategori}/>
    </>
  )
}

export default App
