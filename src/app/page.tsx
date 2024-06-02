"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useLogout } from "@/hooks/useLogout";

export default function Home() {
  const { logout } = useLogout();

  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <Link href="/register">Register</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
