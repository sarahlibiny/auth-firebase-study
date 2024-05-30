import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.containerForm}>
      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input type="text" placeholder="Name" name="name" required />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
