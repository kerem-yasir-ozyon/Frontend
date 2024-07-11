import React from 'react'
import '../assets/style/navi.scss'

const Navi = () => {
  return (
    <nav>
        <div className="navSol">
            <h3>
                Recipe Platform
            </h3>
        </div>
        <div className="navSag">
            <p>Home</p>
            <p>Add Recipe</p>
            <p>About</p>
        </div>
    </nav>
  )
}

export default Navi