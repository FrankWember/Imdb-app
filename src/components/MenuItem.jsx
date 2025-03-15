import Link from "next/link";
import React from "react";

export default function MenuItem({ title, address }) {
  return (
    <Link href={address}>
      <p className="uppercase hidden sm:inline text-sm text-amber-500 gap-4 ">
        {title}
      </p>
    </Link>
  );
}
