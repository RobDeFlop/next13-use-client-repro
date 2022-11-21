"use client";

import { Button } from "@test/ui";

export default function TestPage() {
  // The following line works as expected:
  //return <Button>Works</Button>;

  //This one requires adding "use client" on top due to onClick
  //When adding "use client it throws an error
  return <Button onClick={() => console.log("test")}>test</Button>;
}
