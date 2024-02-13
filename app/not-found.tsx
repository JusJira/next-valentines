"use client";
import Lottie from "lottie-react";
import React from "react";
import heartBreak from "@/public/heartbroken.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center  min-h-[100dvh] space-y-4">
      <div>
        <Lottie animationData={heartBreak} loop={true} />
        
      </div>
      <p className="text-center font-bold text-xl text-rose-700">
          Page Not Found
        </p>
      <Button asChild>
          <Link href="/">Homepage</Link>
        </Button>
    </div>
  );
}
