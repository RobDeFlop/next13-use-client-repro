import { AlertBox } from "@test/ui";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mt-2 z-0">
      <AlertBox title="Default Page" desc="Page" style="warning"></AlertBox>
      <Link href="test">Click here to subpage</Link>
    </div>
  );
}
