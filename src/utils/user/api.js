export async function login(formData) {
  try {
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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


export async function saveTempData(tempData){
  try {
    const response = await fetch('/api/user/tempData', {
      method : 'post',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(tempData)
    })

    if(!response.ok){
      let errorMessage = {message : 'Unexpected Error Occurred'}
      try {
        const errorData = await response.json()
        errorMessage = errorData.errors || {message : errorData.message} || errorMessage
      } catch (jsonError) {
        console.log(jsonError)
      }
      throw errorMessage
    }

    const responseData = await response.json();
    return responseData

  } catch (error) {
    console.log(error)
    throw error
  }
}