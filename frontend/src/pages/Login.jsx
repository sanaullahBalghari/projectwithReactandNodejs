import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [user, setUser] = useState({
    identifier: "",
    password: "",
  });

  const navigate = useNavigate();
  // const {storetokenInLs} = useAuth(); 

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        credentials: "include" 
      });

      const data = await response.json(); 

      if (response.ok) {
        console.log("Login server response data:", data);
        // storetokenInLs(data.data.token);
        setUser({
          identifier: "",
          password: "",
        });
        navigate("/");
      } else {
        console.log("Login failed:", data?.message || "Unknown error");
        alert(data?.message || "Login failed");
      }
    } catch (error) {
      console.log("login error:", error);
      alert("Network error, please try again later");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          name="identifier"
          type="text"
          placeholder="Email or Username"
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={user.identifier}
          onChange={handleInput}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={user.password}
          onChange={handleInput}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
