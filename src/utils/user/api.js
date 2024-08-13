export async function login(formData) {
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
      let errorMessage = "Unexpected Error Occurred";

      try {
        const errorData = await response.json();

        if (errorData.message) {
          errorMessage = errorData.message;
        }
      } catch (jsonError) {
        // If JSON parsing fails, fall back to a generic message
        console.error("Error parsing JSON:", jsonError);
      }
      throw new Error(errorMessage);
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
      let errorMessage = { message: "Unexpected Error Occurred" };
      try {
        const errorData = await response.json();
        errorMessage =
          errorData.errors || { message: errorData.message } || errorMessage;
      } catch (jsonError) {
        console.error("Error parsing JSON:", jsonError);
      }
      throw errorMessage;
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
