import React, { useState } from "react";
import auth from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signInWithEmailAndPassword(auth, email, pass);
      console.log("Logged in user:", res.user);
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <label>Password</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
