import { useEffect, useState } from 'react'
import Navi from './components/Navi'
import Head from './components/Head'
import CardList from './components/CardList'
import Form from './components/Form'


const App = () => {

  const [yemekler,setYemekler] = useState([]);

  const yemekEkle = async (yeni) => {
    let url = "http://localhost:3000/yemekler";
    if(!secilenKitap){ // yemek Ekleme Bölümü
      //Frontend ekleme işlemi
      setYemekler(prev=>[...prev,yeni]);
      //Backend ekleme işlemi
      const response = await axios.post(url,yeni);
    }
    else{//Kitap Düzenleme bölümü
      url+=`/${secilenKitap.id}`;
      const response2 = await axios.put(url,yeni);
      setYemekler(prev=>
        prev.map(kitap=>{
          if(kitap.id === secilenKitap.id){
            return {...response2.data}
          }
          else{
            return {...kitap}
          }
        })
        )
      setSecilenKitap("");
    }
  }

  const yemekSil = (id) =>{
    setYemekler(prev=>prev.filter(statedenGelen=>statedenGelen.id !== id));
  }

  const yemekleriGetir = async () => {
    const url = "http://localhost:3000/yemekler"
    const response = await fetch(url);
    const yemekler = await response.json();
    setYemekler(yemekler);
  }

  useEffect(()=>{
    yemekleriGetir()
  },[])

  return (
    <>
      <Navi/>
      <Head/>
      <Form yemekEkle={yemekEkle} yemekler={yemekler}/>
      <CardList yemekler={yemekler} yemekSil={yemekSil}/>
    </>
  )
}

export default App
