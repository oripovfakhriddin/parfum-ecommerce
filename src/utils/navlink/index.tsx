"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Children from "@/types/children";

const NavLink = ({ href, children }: { href: string } & Children) => {
  const pathName = usePathname();

  return (
    <Link href={href} className={pathName === href ? "text-red-600" : ""}>
      {children}
    </Link>
  );
};

export default NavLink;
