import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase/firebase";

export function useLogout() {
  const logout = async () => {
    const auth = getAuth(app);

    await signOut(auth);
  };

  return { logout };
}
