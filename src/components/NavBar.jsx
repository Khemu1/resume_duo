import HomeCSS from '/public/styles/Home.module.css';
import React,{ useContext, useEffect } from 'react';
import { Context } from "../App";
import { Navigate, useNavigate } from 'react-router-dom';
import NavBarCSS from '/public/styles/navBar.module.css'

export default function LargestContentfulPaint() {


    const [username, setUsername] = useContext(Context)


    useEffect(() => {
        const storedCount = localStorage.getItem('username');
        if (storedCount) {
            setUsername(storedCount);
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('username', username);
    }, [username]);

    return(
        <div className={NavBarCSS.navBar}>{username}</div>
    )
}