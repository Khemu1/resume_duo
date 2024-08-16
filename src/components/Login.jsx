import { useState } from "react";
import LoginCSS from "/public/styles/Login.module.css";
import { useLogin, useRegister } from "/src/hooks/user.js";

export default function Login() {

  const [errors,setErrors] = useState({
    usernameError : '',
    passwordError : ''
  })

  const {
    loading: loginLoading,
    error: loginErrors,
    handleUseLogin,
  } = useLogin();
  const {
    loading: registerLoading,
    error: registerErrors,
    handleUseRegister,
  } = useRegister();
  
  const [form, setForm] = useState({
    username: "",
    password: "",
    check: false,
  });
  // console.log(registerErrors);
  // console.log(loginErrors);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setForm((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    setErrors(oldvalues =>{
      return{
        ...oldvalues,
        usernameError : '',
        passwordError : ''
      }
    })


    try {
      await handleUseLogin(form);
      console.log(registerErrors);
  console.log(loginErrors);
      if( loginErrors.username){
        console.log(loginErrors)
        console.log(loginErrors.username)
        console.log("hi")
        setErrors(oldvalues => {
          return{
            ...oldvalues,
            usernameError : loginErrors.username
          }
        })
      }if(loginErrors.password){
        console.log(loginErrors)
        console.log(loginErrors.username)
        console.log("hi")
        setErrors(oldvalues => {
          return{
            ...oldvalues,
            passwordError : loginErrors.password
          }
        })
      }
    } catch (error) {
      console.error("Login catch error:", error);  
      console.log(error)
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    setErrors(oldvalues =>{
      return{
        ...oldvalues,
        usernameError : '',
        passwordError : ''
      }
    })

    try {
      await handleUseRegister(form);
      console.log(registerErrors);
  console.log(loginErrors);
      if( registerErrors.username){
        console.log(registerErrors)
        console.log(registerErrors.username)
        console.log("hi")
        setErrors(oldvalues => {
          return{
            ...oldvalues,
            usernameError : registerErrors.username
          }
        })
      }if(registerErrors.password){
        console.log(registerErrors)
        console.log(registerErrors.username)
        console.log("hi")
        setErrors(oldvalues => {
          return{
            ...oldvalues,
            passwordError : registerErrors.password
          }
        })
      }
    } catch (error) {
      console.error("Register catch error:", error);
      console.log(errors.passwordError)
    }
  };

  return (
    <div className={LoginCSS.page}>
      <div className="main">
        <div className="main_content h-full w-full flex flex-col gap-10">
          <div className="h1_div">
            <h1>Resume builder</h1>
          </div>

          <form className={LoginCSS.form} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="username">User name</label>
            <input
              type="text"
              id="username"
              name="username"
              value={form.username}
              className="input_field"
              onChange={handleChange}
            />
            { errors.usernameError && (
              <p className="error-text">{errors.usernameError}</p>
            )}
            {/* {registerErrors && registerErrors.username && (
              <p className="error-text">{registerErrors.username}</p>
            )} */}
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              className="input_field"
              onChange={handleChange}
            />
            {errors.passwordError && (
              <p className="error-text">{errors.passwordError}</p>
            )}
            {/* {registerErrors && registerErrors.password && (
              <p className="error-text">{registerErrors.password}</p>
            )} */}
            <br />

<div className={LoginCSS.checkboxAndLabel}>

            <input
              type="checkbox"
              id="check"
              name="check"
              checked={form.check}
              onChange={handleChange}
            />
            <label htmlFor="check" className="check_label">
              Remember me
            </label>

            </div>

            <br />
            <div className="buttons flex flex-row gap-7 justify-center">
              <button
                className="button"
                onClick={handleLogin}
                disabled={loginLoading}
              >
                Sign in
              </button>
              <button
                className="button"
                onClick={handleSignUp}
                disabled={registerLoading}
              >
                Sign up
              </button>
            </div>
            <div className="userNotFound flex justify-center">
              {(loginErrors || registerErrors) && (
                <p className="text-sm font-extrabold text-red-600">
                  {loginErrors?.message || registerErrors?.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
