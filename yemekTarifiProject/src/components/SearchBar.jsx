import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../context/DataContext'
import '../assets/style/search.scss'
import { FaSearch } from "react-icons/fa";
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchBar = () => {
    const {secilenKategori, setSearch} = useContext(DataContext);
    const {isAuthenticated, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState("");

    const handleLogin = () => {
        navigate("/login");
    }

    const handleLogout = () => {
        logout();
        navigate("/login");
    }
    
    const getCurrentUser = async () => {
        try {
            const url = "https://api.escuelajs.co/api/v1/auth/profile";
            const response = await axios.get(url, {
                headers: {
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).access_token}`
                }
            });
            const user = await response.data;
            setCurrentUser(user);
        } catch (error) {
            console.error("Error fetching user data", error);
            setCurrentUser(null);
        }
    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("user"))) {
            getCurrentUser();
        }
    }, []);

    return (
        <div className='search'>
            <div className="kullanici">
                {currentUser && (
                    <div className="userCard">
                        <img src={currentUser.avatar} alt="profil" />
                        <div className="userText">
                            <span>{currentUser.email} / {currentUser.role}</span>
                        </div>
                    </div>
                )}
                <button onClick={isAuthenticated ? handleLogout : handleLogin}>
                    {isAuthenticated?"Logout":"Login"}
                </button>
            </div>
            <div className='searchBar'>
                <h3 style={{marginLeft: "25px"}}>{secilenKategori}</h3>
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='search... ' />
                <FaSearch />
            </div>
        </div>
    );
}

export default SearchBar;
