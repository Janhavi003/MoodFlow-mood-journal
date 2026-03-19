import { useState } from "react";
import { login } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      login(form);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <form
        onSubmit={handleSubmit}
        className="card p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6">Login</h1>

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
          Login
        </button>

        <p className="text-sm text-gray-500 mt-4 text-center">
          No account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}