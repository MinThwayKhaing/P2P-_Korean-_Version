"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
      router.push("/dashboard");
  }, [router]);
  return (
    <><div className="flex justify-center items-center h-screen">
      <h1 style={{ fontSize: "4rem" }}>Welcome from P2P</h1>
    </div></>
  );
}
