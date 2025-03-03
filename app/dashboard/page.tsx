"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    
    const router = useRouter();

    const handleLogout = async () => {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => router.push("/"),
          },
        });
    };

    return (
        <div className="app-container">
            <p>Signed In</p>
            <button onClick={handleLogout}>Sign Out</button>
        </div>
    );
}