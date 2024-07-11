import React, { useState } from 'react'
import '../assets/style/form.scss'

const Form = ({yemekEkle,yemekler}) => {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [image,setImage] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    yemekEkle({
      
      id: (Number(yemekler[yemekler.length-1].id)+1).toString(),
      title: title,
      description: description,
      image:image
    });
    setTitle("");
    setDescription("");
    setImage("");
    
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input">
        <input value={title} onChange={e=>setTitle(e.target.value)} type="text" placeholder='RecipeTitle' />
      </div>
      <div className="input">
        <input value={description} onChange={e=>setDescription(e.target.value)} type="text" placeholder='Recipe Description' />
      </div>
      <div className="input">
      <input value={image} onChange={e=>setImage(e.target.value)} type="text" placeholder='Image URL' />
      </div>
      <div className="inputS">
      <input disabled={title===""||description===""||image===""} type="submit" value={"Add Recipe"} />
      </div>
      
    </form>
  )
}

export default Form