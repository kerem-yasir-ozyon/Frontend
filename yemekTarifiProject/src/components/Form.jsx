import React, { useEffect, useState } from 'react'
import '../assets/style/form.scss'

const Form = ({yemekEkle,yemekler,secilenYemek}) => {
  const [title,setTitle] = useState("");
  const [category,setCategory] = useState("Select Category");
  const [description,setDescription] = useState("");
  const [image,setImage] = useState("");

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
    if(secilenYemek){
      setTitle(secilenYemek.title);
      setCategory(secilenYemek.category);
      setDescription(secilenYemek.description);
      setImage(secilenYemek.image);
    }
  },[secilenYemek])

  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
      <div className="input">
        <input value={title} onChange={e=>setTitle(e.target.value)} type="text" placeholder='RecipeTitle' />
      </div>
      <div className="categorySelect">
        <select value={category} onChange={e=>setCategory(e.target.value)}>
          <option>Select Category</option>
          <option>Italian Food</option>
          <option>Turkish Food</option>
        </select>
      </div>
      
      <div className="input">
        <input value={description} onChange={e=>setDescription(e.target.value)} type="text" placeholder='Recipe Description' />
      </div>
      <div className="input">
      <input value={image} onChange={e=>setImage(e.target.value)} type="url" placeholder='Image URL' />
      </div>
      <div className="inputS">
      <input disabled={title===""||description===""||image===""} type="submit" value={secilenYemek?"Güncelle":"Ekle"} />
      </div>
      
    </form>
    </div>
    
  )
}

export default Form