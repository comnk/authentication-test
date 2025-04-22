"use client";

import { useEffect, useState } from "react";

export default function LoginPage() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const getSession = async () => {
      const res = await fetch("/api/auth/session");
      const data = await res.json();
      setSession(data?.user || null);
    };
    getSession();
  }, []);

  const handleSignIn = () => {
    window.location.href = "/api/auth/signin";
  };

  const handleSignOut = () => {
    window.location.href = "/api/auth/signout";
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {session ? (
        <>
          <p className="mb-4">Welcome, {session.name}</p>
          <button onClick={handleSignOut} className="bg-red-500 text-white px-4 py-2 rounded">
            Sign Out
          </button>
        </>
      ) : (
        <>
          <p className="mb-4">Please sign in</p>
          <button onClick={handleSignIn} className="bg-blue-500 text-white px-4 py-2 rounded">
            Sign In with Google
          </button>
        </>
      )}
    </main>
  );
}
