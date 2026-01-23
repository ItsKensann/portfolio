"use client";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return <>{!isLoading}</>;
}
