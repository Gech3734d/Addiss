
import { Suspense } from "react";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <main className="container page-main">
          <p role="status">Loading login...</p>
        </main>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
