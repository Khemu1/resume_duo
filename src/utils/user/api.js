export async function Login(formData){
    

    try {
        const response = await fetch("/api/user/login", {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
        return data
  
        // if (data.message) {
        //   setError((oldValues) => ({
        //     ...oldValues,
        //     notFoundORInUse: data.message,
        //   }));
        // }
  
        // if (data.username === form.username) {
        //   setUser(data.username);
  
        //   if (form.check) {
        //     // Handle setting the cookie if needed
        //   }
  
        //   navigate("/home");
        // }
      } catch (error) {
        console.error("Error:", error);
        return error
      }
}