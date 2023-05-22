import Link from "next/link";
import React from "react";
import Button from "./Button";

type Props = {};

function HireMe({}: Props) {
  return (
    <Link href={"/"}>
      <Button fill>Hire Me</Button>
    </Link>
  );
}

export default HireMe;
