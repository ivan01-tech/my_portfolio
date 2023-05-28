import Link from "next/link";
import React from "react";
import Button from "./Button";
import { socialNetworkLink } from "@/utils/constant";

type Props = {};

function HireMe({}: Props) {
  return (
    <Link prefetch={false} href={socialNetworkLink.linked}>
      <Button fill>Hire Me</Button>
    </Link>
  );
}

export default HireMe;
