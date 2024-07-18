import React from 'react'

const Card = () => {
  return (
    <div className='container'>
        <button>Get Random User</button>
        <div className="container-card">
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />
            <div className="container-card-body">
                <p>Ms.Ella Makinen</p>
                <p>Finland</p>
                <p>ella.makinen@example.com</p>
            </div>
        </div>
    </div>
  )
}

export default Card