import { useAuthentication } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useAuthentication();
  const router = useRouter();

  useEffect(() => {
    if (!user?.uid) {
      router.push("/");
    }
  }, [router, user]);

  return <div>{user ? children : null}</div>;
}
