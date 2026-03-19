import { useState } from "react";
import { login } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">

      <form className="card p-8 w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Login</h2>

        <input className="input mb-4" placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})}/>

        <input type="password" className="input mb-4" placeholder="Password"
          onChange={(e)=>setForm({...form,password:e.target.value})}/>

        <button className="button-primary w-full">Login</button>
      </form>
    </div>
  );
}