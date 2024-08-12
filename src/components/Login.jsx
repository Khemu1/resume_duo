import { useState } from "react";
import { useContext } from 'react';
import { Context } from "../App";
import { useNavigate } from "react-router-dom";
import LoginCSS from '/public/styles/Login.module.css';
import React from "react";
export default function LargestContentfulPaint() {
  const [form, setData] = useState({
    username: "",
    password: "",
    check: false
  });

  const [errors, setError] = useState({
    usernameError : "",
    passwordError : "",
    notFoundORInUse : ""
  })

  const [username, setUsername] = useContext(Context)

  const navigate = useNavigate()

  // const setCookie = (name, value, days) => {
  //   const expirationDate = new Date();
  //   expirationDate.setDate(expirationDate.getDate() + days);
  
  //   document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
  // };


  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setData(oldValues => {
      return {
        ...oldValues,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }
  const handleLogin = (event) => {
    errors.passwordError = ''
    errors.usernameError = ''
    errors.notFoundORInUse = ''
    event.preventDefault();

    fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.message != ""){
          setError(oldValues =>{
            return{
              ...oldValues,
              notFoundORInUse : data.message
            }
          })
        }
        if ( data.username == form.username && form.check === true){
        //   setCookie("username", data.username, 7)
        //   console.log("cookie created successfuly")
        setUsername(form.username)
        console.log(username)
        // URL('http://localhost:5173/Home')
        // window.open('http://localhost:5173/Home');
        navigate("/Home");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleRegister = (event) => {
    errors.passwordError = ''
    errors.usernameError = ''
    errors.notFoundORInUse = ''
    event.preventDefault();
    // Send form data to PHP using fetch or axios
    fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if(data.errors){
          if (data.errors.password != ""){
            setError(oldValues =>{
              return{
                ...oldValues,
                passwordError : data.errors.password
              }
            })
          }
          if (data.errors.username != ""){
            setError(oldValues =>{
              return{
                ...oldValues,
                usernameError : data.errors.username
              }
            })
          }
        }
        if(data.message !=""){
          setError(oldValues =>{
            return{
              ...oldValues,
              notFoundORInUse : data.message
            }
          })
        }
        if ( data.username == form.username && form.check === true){
        //   setCookie("username", data.username, 7)
        //   console.log("cookie created successfuly")
        setUsername(form.username)
        console.log(username)
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className={LoginCSS.page}>
      <div className="main">
        <div className="main_content h-full w-full flex flex-col gap-10">
          <div className="h1_div">
            <h1>Resume builder</h1>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label htmlFor="username">user name</label>
            <input
              type="text"
              id="username"
              name="username"
              value={form.username}
              className="input_field"
              onChange={handleChange}
            ></input>

            <p>{errors.usernameError}</p>

            <br /> 
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              className="input_field"
              onChange={handleChange}
            ></input>

            <p>{errors.passwordError}</p>

            <br />
            <input
              type="checkbox"
              id="check"
              name="check"
              checked={form.check}
              onChange={handleChange}
            ></input>
            <label htmlFor="check" className="check_label">
              remember me
            </label>
            <br /> <br />
            <br />
            <div className="butons flex flex-row gap-7 justify-center">
              <button className="button" onClick={handleLogin}>
                sign in
              </button>
              <button className="button" onClick={handleRegister}>
                sign up
              </button>
            </div>

            <div className="userNotFound flex justify-center">{errors.notFoundORInUse}</div>

          </form>
        </div>
      </div>
    </div>  
  );
}
