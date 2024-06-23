import styles from "./header.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogOut = () => {
    logout();
    router.push("/");
  };

  return (
    //to do
    //renderizacao condicional baseado no estado do user
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
              <button onClick={handleLogOut}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
