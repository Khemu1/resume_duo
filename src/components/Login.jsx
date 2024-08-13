import { useState, useContext } from "react";
import { UserContext } from "./user_context/UserContext";
import LoginCSS from "/public/styles/Login.module.css";
import { useLogin, useRegister } from "/src/hooks/user.js";

export default function Login() {
  const { user, setUser } = useContext(UserContext);

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
  console.log(registerErrors);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setForm((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await handleUseLogin(form);
    } catch (error) {
      console.error("Login catch error:", error);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      await handleUseRegister(form);
    } catch (error) {
      console.error("Register catch error:", error);
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
            {loginErrors && loginErrors.username && (
              <p className="error-text">{loginErrors.username}</p>
            )}
            {registerErrors && registerErrors.username && (
              <p className="error-text">{registerErrors.username}</p>
            )}
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
            {loginErrors && loginErrors.password && (
              <p className="error-text">{loginErrors.password}</p>
            )}
            {registerErrors && registerErrors.password && (
              <p className="error-text">{registerErrors.password}</p>
            )}
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
