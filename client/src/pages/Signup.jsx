import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password: pass }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      const { token, userId } = await response.json();
      localStorage.setItem("authToken", token);
      localStorage.setItem("userId", userId);
      navigate("/protected/owners");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Sign up</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Sign up</button>
      </form>
      <button href="/signup">
        <a href="/">Already have an account? Login here.</a>
      </button>
    </div>
  );
};

export default Signup;
