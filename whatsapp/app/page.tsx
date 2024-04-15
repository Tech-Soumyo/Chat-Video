"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  // useEffect(() => {
  //   router.push("/conversations");
  // }, []);

  return (
    <>
      <div>
        hii
        <Button>hi</Button>
        <UserButton />
      </div>
    </>
  );
}
