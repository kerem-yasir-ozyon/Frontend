import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/style/loginPage.scss'

const LoginPage = () => {

    const[user,setUser] = useState("");
    const[password,setPassword] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async(e) =>{
        e.preventDefault();
        try {
            await login(user,password);
            navigate("/");
        } catch (error) {
            alert("OOOooooopsss! Login Failed");
            setUser("");
            setPassword("");
        }
    }

  return (
    <div className='login-page'>
        <form onSubmit={handleLogin}>
            <h3>Login</h3>
            <input value={user} onChange={e=>setUser(e.target.value)} type="text" placeholder='Username' />
            <input value={password} onChange={e=>setPassword(e.target.value)} type="text" placeholder='Password' />
            <div className="lgnBtn">
            <input type="submit" value={"Login"} />
            </div>
            <Link to="/">Ziyaretçi olarak siteye giriş için tıklayınız..</Link>
        </form>
    </div>
  )
}

export default LoginPage