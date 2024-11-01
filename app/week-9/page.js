"use client";
import Link from "next/link";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="text-center p-5 mt-10">
      <h1 className="text-5xl font-bold p-5 m-5">Shopping List App</h1>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <Link href="week-9/shopping-list" className="link link-primary mr-5">
            Visit Shopping App
          </Link>
          <button
            onClick={async () => await firebaseSignOut()}
            className="btn btn-primary"
          >
            Sign out
          </button>
        </div>
      ) : (
        <button
          onClick={async () => await gitHubSignIn()}
          className="btn btn-primary"
        >
          Sign in with Github
        </button>
      )}
    </main>
  );
}
