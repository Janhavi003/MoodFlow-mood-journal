import { useState } from "react";
import { signup } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      signup(form);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <form className="card p-8 w-full max-w-md" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>

        <input
          className="input mb-4"
          placeholder="Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          className="input mb-4"
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          className="input mb-4"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="button-primary w-full">
          Create Account
        </button>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}