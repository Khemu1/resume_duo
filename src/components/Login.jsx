import { useState } from "react";

export default function LargestContentfulPaint() {
  const [data, setData] = useState({
    username: "",
    password: "",
    check: false,
  });

  const [errors, setError] = useState({
    usernameError : "",
    passwordError : "",
    notFound : ""
  })

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setData((oldValues) => {
      return {
        ...oldValues,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  const handleLogin = (event) => {
    errors.passwordError = ''
    errors.usernameError = ''
    errors.notFound = ''
    event.preventDefault();

    fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        
        console.log(data)
        if (data.message != ""){
          setError(oldValues =>{
            return{
              ...oldValues,
              notFound : data.message
            }
          })
        }
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleRegister = (event) => {
    errors.passwordError = ''
    errors.usernameError = ''
    event.preventDefault();
    // Send form data to PHP using fetch or axios
    fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {

        console.log(data);

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

      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
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
            value={data.username}
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
            value={data.password}
            className="input_field"
            onChange={handleChange}
          ></input>

          <p>{errors.passwordError}</p>

          <br />
          <input
            type="checkbox"
            id="check"
            name="check"
            checked={data.check}
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

          <div className="userNotFound flex justify-center">{errors.notFound}</div>

        </form>
      </div>
    </div>
  );
}
