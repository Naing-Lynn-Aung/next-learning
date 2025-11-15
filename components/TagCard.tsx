import Link from "next/link";
import React from "react";

function TagCard({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`bg-tertiary text-gray-300 px-4 py-2 rounded-xl w-[100px]`}
    >
      {children}
    </Link>
  );
}

export default TagCard;
