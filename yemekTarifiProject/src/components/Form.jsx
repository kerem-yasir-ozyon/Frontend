import React, { useContext } from 'react'
import '../assets/style/form.scss'
import DataContext from '../context/DataContext'

const Form = () => {
  const {secilenYemek,
          title,
          category,
          description,
          image,
          setTitle,
          setCategory,
          setDescription,
          setImage,
          handleSubmit
        } = useContext(DataContext);

  return (
    <div className="formDiv">
      
      <form onSubmit={handleSubmit}>
      <h1>Food Crud</h1>
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