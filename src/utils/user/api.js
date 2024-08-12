export async function Login(formData) {
  try {
    const response = await fetch("/api/user/login", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // Check if the response is not OK
    if (!response.ok) {
      const errorData = await response.json();
      throw {
        message: errorData.message || "Login failed",
      };
    }

    // If response is OK, parse the data
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    // Re-throw the error object so it can be caught in the hook
    throw error;
  }
}

export const registerUser = async (data) => {
  try {
    const response = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.erros) {
        throw new Error(errorData.erros);
      }
      if (errorData.message) {
        throw new Error(errorData.message);
      }
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error("Error:", error);
    throw error || "An error occurred";
  }
};
