import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "issue", href: "/issue" },
  ];
  return (
    <nav className="flex space-x-6 border-b p-4 h-14 mx-5">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-6 capitalize ">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-slate-100 hover:text-slate-300 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
