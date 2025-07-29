import React ,{useState}from 'react';
import Input from '../../components/common/Input.jsx';
import Button from '../../components/common/Button.jsx';
import Card from '../../components/common/Card.jsx';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    fullName: "",
    password: ""
  });

  const navigate= useNavigate();

  const handleInput = (e) => {
    console.log(e)
    let name = e.target.name;
    let value = e.target.value;

   

    setUser({
      ...user,
      [name]: value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:8000/api/v1/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    
    
    if (response.ok) {
      const data = await response.json();
      console.log(" Register server response data:", data);
     setUser({username: "", email: "", fullName: "", password: ""});
      navigate("/login");
    } else {
      
      alert("Registration failed: " + data.message);
    }
    console.log(response)
  } catch (error) {
    console.log("Register error:", error);
  }
};


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
          placeholder="you@example.com"
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
          placeholder="*******"
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
