import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, Login } from "../utils/user/api";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigateTo = useNavigate();

  const handleUseLogin = async (data) => {
    try {
      setLoading(true);
      setError(null);

      const response = await Login(data);

      setSuccess(true);
      console.log("Login successful:", response);
      navigateTo("/home");
    } catch (err) {
      setError(err.message || "Unexpected error occurred");
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

      const response = await registerUser(data);

      setSuccess(true);
      console.log("Login successful:", response);
      navigateTo("/home");
    } catch (err) {
      setError(err || "Unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      console.log("Register was successful");
    }
    if (error) {
      console.log("Error occurred during register:", error);
    }
  }, [success, error]);

  return { loading, error, success, handleUseRegister };
}
