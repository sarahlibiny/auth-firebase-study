"use client";
import { FormEvent, useState } from "react";
import styles from "./resetPassword.module.css";
import { useAuth } from "@/hooks/useAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email);
    await resetPassword(email);
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.container}>
        <h1>Reset Password</h1>
        <p>
          We'll send an email with instructions to reset your password and get
          you back on the game.
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              placeholder="Enter your e-mail"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <button>Send Link</button>
        </form>
      </div>
    </>
  );
}
