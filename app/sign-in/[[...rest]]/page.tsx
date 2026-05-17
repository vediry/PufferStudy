import { SignIn } from "@clerk/nextjs";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://pufferstudy.vercel.app";

export default function SignInPage() {
  return (
    <main className="flex min-h-[calc(100dvh-4rem)] items-center justify-center px-6 py-16">
      <SignIn signUpUrl="/sign-up" fallbackRedirectUrl={APP_URL} />
    </main>
  );
}
