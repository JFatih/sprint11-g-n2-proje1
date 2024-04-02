import axios from "axios";
import React, { useContext, useState } from "react";
import { Form } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "../contexts/AuthContext";

function LoginForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>USERNAME</h2>
            <input
              placeholder="Username"
              onChange={handleChange}
              name="username"
              value={form.username}
              type="text"
            />
          </div>
          <div>
            <h2>PASSWORD</h2>
            <input
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={form.password}
              type="password"
            />
          </div>
          <button>SUBMİT</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
