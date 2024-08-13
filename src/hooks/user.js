import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, login } from "../utils/user/api";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigateTo = useNavigate();

  const handleUseLogin = async (data) => {
    try {
      setLoading(true);
      setError(null);

      await login(data);

      setSuccess(true);
      navigateTo("/home");
    } catch (err) {
      setSuccess(false);

      if (err.username || err.password) {
        setError({ username: err.username, password: err.password });
      } else if (err.message) {
        setError({ message: err.message });
      } else {
        setError({ message: "An unexpected error occurred" });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      console.log("Login was successful");
    }
    if (error) {
      //   console.log("Error occurred during login:", error);
    }
  }, [success, error]);

  return { loading, error, success, handleUseLogin };
}

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigateTo = useNavigate();

  const handleUseRegister = async (data) => {
    try {
      setLoading(true);
      setError(null);

      await registerUser(data);

      setSuccess(true);
      navigateTo("/home");
    } catch (err) {
      setSuccess(false);

      if (err.username || err.password) {
        setError({ username: err.username, password: err.password });
      } else if (err.message) {
        setError({ message: err.message });
      } else {
        setError({ message: "An unexpected error occurred" });
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, handleUseRegister };
}
