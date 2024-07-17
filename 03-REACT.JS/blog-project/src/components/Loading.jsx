import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Loading = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/ank/anasayfa")
        },3000)
        
    })
    
  return (
    <div className="kapLoading">
        <div className='loader'> </div>
    </div>
    
  )
}

export default Loading