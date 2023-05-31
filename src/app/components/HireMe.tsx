import Link from "next/link";
import Button from "./Button";
import { socialNetworkLink } from "@/app/utils/constant";

type Props = {};

function HireMe({}: Props) {
  return (
    <Link prefetch={false} href={socialNetworkLink.linked}>
      <Button fill>Hire Me</Button>
    </Link>
  );
}

export default HireMe;
