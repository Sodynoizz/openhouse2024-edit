"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "../components/UserCard";

export default function LoginComponents() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button
          onClick={() => signOut()}
          type="button"
          className="bg-blue-500 rounded-md"
        >
          Sign Out of google
        </button>

        <UserCard user={session?.user} />
      </>
    );
  } else {
    return (
      <>
        <button
          onClick={() => signIn('google')}
          type="button"
          className="bg-blue-500 rounded-md"
        >
          Sign In to google
        </button>
      </>
    );
  }
}
