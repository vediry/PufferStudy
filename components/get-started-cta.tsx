import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://pufferstudy.vercel.app";

export function GetStartedCTA() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Button asChild size="xl">
        <a href={`${APP_URL}/sign-up`}>
          Get started — free
          <ArrowRight />
        </a>
      </Button>
      <Button asChild size="xl" variant="ghost">
        <a href={`${APP_URL}/sign-in`}>Sign in</a>
      </Button>
    </div>
  );
}
