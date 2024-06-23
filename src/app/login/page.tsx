"use client";

import { FormEvent, useState } from "react";
import styles from "./login.module.css";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/header/header";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const { loading, error, login } = useAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await login(email, password);
    router.push("/dashboard");

    setEmail("");
    setPassword("");
  };

  const handleRedirect = () => {
    router.push("/resetPassword");
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
              name="email"
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
        <button className={styles.buttonReset} onClick={handleRedirect}>
          Reset Password
        </button>
      </div>
    </>
  );
}
