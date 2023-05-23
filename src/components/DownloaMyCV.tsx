import Link from "next/link";
import React from "react";
import Button from "./Button";

type Props = {};

function DownloaMyCV({}: Props) {
  return (
    <Link target="_blank" href={"/media/ivan01-tech_cv-min.pdf"}>
      <Button>Download My CV</Button>
    </Link>
  );
}

export default DownloaMyCV;