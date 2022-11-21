"use client";
import { Button } from "@test/ui";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mt-2 z-0">
      <Button>Is working</Button>
      {/* This requires "use client" and when importing it, it breaks the external ui library*/}
      {/* To reproduce it: comment the following line and remove 'use client'. You should see a red button */}
      <Button onClick={() => console.log("test")}>Is working</Button>
    </div>
  );
}
