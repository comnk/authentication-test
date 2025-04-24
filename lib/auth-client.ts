import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "https://authentication-test-roan.vercel.app/", // the base url of your auth server
  //baseURL: "https://localhost:3000/",
});