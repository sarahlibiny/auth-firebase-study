"use client";

import Header from "@/components/header/header";
import { AuthContextProvider } from "@/context/AuthContext";

export default function Home() {
  return (
    <>
      <AuthContextProvider>
        <Header />
        <h1>Home</h1>
      </AuthContextProvider>
    </>
  );
}
