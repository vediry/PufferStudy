import { SignUp } from "@clerk/nextjs";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://pufferstudy.vercel.app";

export default function SignUpPage() {
  return (
    <main className="flex min-h-[calc(100dvh-4rem)] items-center justify-center px-6 py-16">
      <SignUp signInUrl="/sign-in" fallbackRedirectUrl={APP_URL} />
    </main>
  );
}
