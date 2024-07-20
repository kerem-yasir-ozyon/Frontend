import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({children})=>{

    const [yemekler,setYemekler] = useState([]);
    const [secilenYemek,setsecilenYemek] = useState("");
    const [kategoriler,setKategoriler] = useState([]);
    const [secilenKategori,setSecilenKategori] = useState("All Food");
    const [title,setTitle] = useState("");
    const [category,setCategory] = useState("Select Category");
    const [description,setDescription] = useState("");
    const [image,setImage] = useState("");
  
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
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        yemekEkle({
          
          id: (Number(yemekler[yemekler.length-1].id)+1).toString(),
          title: title,
          category: category,
          description: description,
          image:image
        });
        setTitle("");
        setCategory("Select Category");
        setDescription("");
        setImage("");
    
        
      }
  
    useEffect(()=>{
      kategorileriGetir();
      yemekleriGetir();
    },[])
  
    useEffect(()=>{
      if(secilenYemek){
        setTitle(secilenYemek.title);
        setCategory(secilenYemek.category);
        setDescription(secilenYemek.description);
        setImage(secilenYemek.image);
      }
    },[secilenYemek])

    return <DataContext.Provider value={{
        kategoriler,setSecilenKategori, //Naviden gelenler
        secilenYemek,
        title,
        category,
        description,
        image,
        setTitle,
        setCategory,
        setDescription,
        setImage,
        handleSubmit, //formdan gelenelr
        yemekler,secilenKategori, // CardListten gelenler
        yemekSil,yemekDuzenle // Carddan gelenler
    }}>
                {children}
           </DataContext.Provider>
}


export default DataContext;