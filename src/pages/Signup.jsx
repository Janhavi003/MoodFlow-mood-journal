import { useState } from "react";
import { signup } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(form);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">

      <form className="card p-8 w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Sign Up</h2>

        <input className="input mb-4" placeholder="Name"
          onChange={(e)=>setForm({...form,name:e.target.value})}/>

        <input className="input mb-4" placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})}/>

        <input type="password" className="input mb-4" placeholder="Password"
          onChange={(e)=>setForm({...form,password:e.target.value})}/>

        <button className="button-primary w-full">Create Account</button>
      </form>
    </div>
  );
}