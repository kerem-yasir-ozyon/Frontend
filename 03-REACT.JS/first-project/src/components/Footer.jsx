import React from 'react'
import firstName, { age, image } from '../data'
import './footer.css'

const Footer = () => {
  return (
    <>
    {firstName} - {age}
    <div className="flex">
        {
            image.map((resim,index) =>

                <img key={index} src={resim} alt="resim" />
                
            )
        }
    </div>
    </>
  )
}

export default Footer