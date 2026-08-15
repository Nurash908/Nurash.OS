"use client";

import { useEffect, useState } from "react";
import { Intro } from "@/components/Intro";
import { Archive } from "@/components/Archive";

export default function App() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#0a0a0a";
    document.documentElement.style.color = "#f5f5f0";
  }, []);

  if (!entered) {
    return <Intro onEnter={() => setEntered(true)} />;
  }

  return <Archive />;
}