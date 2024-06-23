"use client";
import ProtectedRoute from "@/components/protectedRoute/protectedRoute";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  return (
    // <ProtectedRoute>
    <h1 className={styles.title}>
      You are logged in, welcome to the dasboard!
    </h1>
    // </ProtectedRoute>
  );
}
