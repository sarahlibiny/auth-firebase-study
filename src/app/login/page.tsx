"use client";

import { FormEvent, useState } from "react";
import styles from "./login.module.css";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/header/header";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { loading, error, login } = useAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await login(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Header />
      <div className={styles.containerForm}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              placeholder="Email"
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
          {loading ? <p>Loading...</p> : <button type="submit">Login</button>}
        </form>
      </div>
    </>
  );
}
