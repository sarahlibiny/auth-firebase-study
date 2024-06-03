import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../firebase/firebase";

import { User, onAuthStateChanged } from "firebase/auth";

interface AuthContextType {
  userAuth: User | null;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const useAuthContext = () => useContext(AuthContext);

interface AuthContextProviderProps {
  children: ReactNode;
}

// export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
//   children,
// }) => {
//   const [userAuth, setUserAuth] = useState<User | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (authUserCredentials: User | null) => {
//       setUserAuth(authUserCredentials);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   })

//   return (
//     <AuthContext.Provider value={{userAuth}}>
//     {children}
//     </AuthContext.Provider>
//   );
// }
