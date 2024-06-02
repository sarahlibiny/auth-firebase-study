import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { app } from "../firebase/firebase";

export function useAuth() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    const auth = getAuth(app);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(userCredential.user);
      return userCredential.user;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Ocorreu um erro desconhecido");
      }
    } finally {
      setLoading(false);
    }
  };
  return { register, loading, error };
}
