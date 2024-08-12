import { useEffect, useState } from "react";
import {Login} from '/src/utils/user/api.js'
import { useNavigate } from "react-router-dom";

export function useLogin(){
    const [loading, setLoadong] = useState(true)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const navigateTo = useNavigate()

    const handleUseLoging = async(data) =>{
        try {
            setLoadong(true)
            await Login(data)
            setSuccess(true)
        } catch (error) {
            console.log(error)
            setError(error)
        }finally{
            setLoadong(false)
        }
    }

    useEffect(() => {
        
        if(success){
            setTimeout(() => {navigateTo("/home")},4000)
            setSuccess(false)
        }
        

    }, [success, error])

    return( {loading, error, success, handleUseLoging} )

}