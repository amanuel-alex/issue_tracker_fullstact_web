"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import className from "classnames";
const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "issue", href: "/issues" },
  ];
  return (
    <>
      <nav className="flex space-x-6 border-b p-4 h-14 mx-5 mb-8 ">
        <Link href="/">Logo</Link>
        <ul className="flex space-x-6 capitalize ">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={className({
                "text-orange-300": link.href === currentPath,
                "text-black": link.href !== currentPath,
                "hover:text-slate-300 transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
