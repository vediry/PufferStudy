import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GetStartedCTA() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Button asChild size="xl">
        <Link href="/sign-up">
          Get started — free
          <ArrowRight />
        </Link>
      </Button>
      <Button asChild size="xl" variant="ghost">
        <Link href="/sign-in">Sign in</Link>
      </Button>
    </div>
  );
}
