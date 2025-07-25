import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    fullName: "",
    password: ""
  });

  const handleInput = (e) => {
    console.log(e)
    let name = e.target.name;
    let value = e.target.value;

   

    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault()

    const response= await fetch(`http://localhost:8000/api/v1/users/register`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
            },

            body:JSON.stringify(user)
    })

    console.log("User registered:", user);
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Registration</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Username"
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={user.username}
          onChange={handleInput}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={user.email}
          onChange={handleInput}
        />
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={user.fullName}
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
