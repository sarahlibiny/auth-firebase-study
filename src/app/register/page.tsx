"use client";

import { FormEvent, useState } from "react";
import styles from "./register.module.css";
import { useAuth } from "@/hooks/useAuth";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { register, loading, error } = useAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await register(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.containerForm}>
      <h1>SignIn</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        {error && <p>{error}</p>}
        {loading ? <p>Loading...</p> : <button type="submit">Register</button>}
      </form>
    </div>
  );
}
