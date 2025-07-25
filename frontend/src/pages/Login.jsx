import React, { use, useState } from "react";

const Login = () => {

  const [user, setUser]=useState({
  identifier: "",
    password:""
  })

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setUser({
      ...user,
      [name]:value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("User logged in:", user)
  }
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
