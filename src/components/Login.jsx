import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./user_context/UserContext";
import LoginCSS from "/public/styles/Login.module.css";

export default function LargestContentfulPaint() {
  const { user, setUser } = useContext(UserContext);

  const [form, setData] = useState({
    username: "",
    password: "",
    check: false,
  });

  const [errors, setError] = useState({
    usernameError: "",
    passwordError: "",
    notFoundORInUse: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setData((oldValues) => {
      return {
        ...oldValues,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const handleLogin = async (event) => {
    setError({
      usernameError: "",
      passwordError: "",
      notFoundORInUse: "",
    });
    event.preventDefault();

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.message) {
        setError((oldValues) => ({
          ...oldValues,
          notFoundORInUse: data.message,
        }));
      }

      if (data.username === form.username) {
        setUser(data.username);

        if (form.check) {
          // Handle setting the cookie if needed
        }

        navigate("/home");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRegister = async (event) => {
    setError({
      usernameError: "",
      passwordError: "",
      notFoundORInUse: "",
    });
    event.preventDefault();

    try {
      const response = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.errors) {
        if (data.errors.password) {
          setError((oldValues) => ({
            ...oldValues,
            passwordError: data.errors.password,
          }));
        }

        if (data.errors.username) {
          setError((oldValues) => ({
            ...oldValues,
            usernameError: data.errors.username,
          }));
        }
      }

      if (data.message) {
        setError((oldValues) => ({
          ...oldValues,
          notFoundORInUse: data.message,
        }));
      }

      if (data.username === form.username) {
        setUser(data.username);

        if (form.check) {
          // Handle setting the cookie if needed
        }

        navigate("/home");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={LoginCSS.page}>
      <div className="main">
        <div className="main_content h-full w-full flex flex-col gap-10">
          <div className="h1_div">
            <h1>Resume builder</h1>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="username">User name</label>
            <input
              type="text"
              id="username"
              name="username"
              value={form.username}
              className="input_field"
              onChange={handleChange}
            />
            <p>{errors.usernameError}</p>
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
            <p>{errors.passwordError}</p>
            <br />
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
            <br /> <br />
            <br />
            <div className="buttons flex flex-row gap-7 justify-center">
              <button className="button" onClick={handleLogin}>
                Sign in
              </button>
              <button className="button" onClick={handleRegister}>
                Sign up
              </button>
            </div>
            <div className="userNotFound flex justify-center">
              {errors.notFoundORInUse}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
