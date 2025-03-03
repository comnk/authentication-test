"use client";

import { useRouter } from "next/navigation";
import "./styles.css"

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");

    try {
      const { error } = await authClient.signIn.social(
        {
          provider: "google",
          callbackURL: "/dashboard",
        },
        {
          onRequest: () => setLoading(true),
          onSuccess: () => router.push("/dashboard"),
          onError: (ctx) => setError(ctx.error.message || "Sign in failed"),
        }
      );

      if (error) {
        setError(error.message || "Sign in failed");
      }
    } catch {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <button className="google-button" onClick={handleGoogleSignIn}>Continue with Google</button>
      <form className="form-container">
        <input type="email" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <button type="submit">Submit</button>
      </form>
      <p>{error}</p>
      <p>{loading}</p>
    </div>
  );
}
