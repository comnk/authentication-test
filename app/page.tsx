"use client";

import Link from "next/link";

export default function LoginPage() {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Link
            href="/login"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Sign In
      </Link>
    </main>
  );
}
