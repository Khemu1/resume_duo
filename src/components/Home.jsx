import HomeCSS from '/public/styles/Home.module.css';
import React,{ useContext, useEffect } from 'react';
import { Context } from "../App";
import { Navigate, useNavigate } from 'react-router-dom';
import NaveBar from '/src/components/NavBar'

export default function LargestContentfulPaint() {


    

    return(
        <div className={HomeCSS.page}>
            <NaveBar />
        </div>
    )
}