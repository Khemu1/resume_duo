import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import axios from 'axios'

export default function LargestContentfulPaint(){

    const [data, setData] = useState({
        username : "",
        password : "",
        check : false
    })

    function handleChange(event){
        const {name, type, value, checked} = event.target
        setData(oldValues =>{
            return{
                ...oldValues,
                [name] : type === "checkbox" ? checked : value
            }
        } )
    }
    const handleSignIn = (event) => {
        event.preventDefault();
        // Send form data to PHP using fetch or axios
        fetch('/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            // Handle response from PHP
    
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //     const response = await
    // axios.post('/index.php', data);
    //       console.log(response.data); // Handle success
    //     } catch (error) {
    //       console.error(error); // Handle error
    //     }
    // };

    

    return(
        <div className='main'>
            <div className='main_content h-full w-full flex flex-col gap-10'>
                <div className='h1_div'><h1>Resume builder</h1></div>

                <form>

                    <label htmlFor='username'>user name</label>
                    <input type='text' id='username' name='username' value={data.username} className='input_field' onChange={handleChange}></input>
                    <br /> <br />
                    <label htmlFor='password'>password</label>
                    <input type='password' id='password' name='password' value={data.password} className='input_field' onChange={handleChange}></input>
                    <br /> <br /><br />
                    <input type='checkbox' id='check' name='check' checked={data.check} onChange={handleChange}></input>
                    <label htmlFor='check'className='check_label'>remember me</label>
                    <br /> <br /><br />

                    <div className='butons flex flex-row gap-7 justify-center'>
                    <button type='button' className='button' >sign in</button>

                    <button type='submit' className='button'>sign up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}