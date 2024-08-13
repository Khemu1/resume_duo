import { useState, useContext } from "react";
import { UserContext } from "./user_context/UserContext";
import LoginCSS from "/public/styles/Login.module.css";
import { useLogin, useRegister } from "/src/hooks/user.js";

export default function Login() {
  const { user, setUser } = useContext(UserContext);

  const { loading, error: loginErrors, handleUseLogin } = useLogin();
  const {
    loading: registerLoading,
    error: registerErrors,
    handleUseRegister,
  } = useRegister();

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
      handleUseLogin(form);
      if (loginErrors) {
        console.log("i'm from login", loginErrors);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async (event) => {
    try {
      handleUseRegister(form);
      if (registerErrors) {
        console.log("i'm from register", RegisterErrors);
        return;
      }
    } catch (error) {
      console.log(error);
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
            <br />
            {registerErrors && registerErrors.errors && registerErrors.errors.username && (
              <p>{registerErrors.errors.username}</p>
            )}{" "}
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
            { registerErrors && registerErrors.errors && registerErrors.errors.password && (
              <p>{registerErrors.errors.password}</p>
            )}
            <br /><br />
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
            <div className={LoginCSS.buttons}>
              <button className={LoginCSS.button} onClick={handleLogin}>
                Sign in
              </button>
              <button className={LoginCSS.button} onClick={handleSignUp}>
                Sign up
              </button>
            </div>
            <div className="userNotFound flex justify-center">
              { loginErrors && (
                <p className="text-sm font-semibold text-red-600">
                  {loginErrors}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
