import Link from "next/link";
import React from "react";

const links = [
  {
    href: "/clients",
    label: "client",
  },
  {
    href: "/drinks",
    label: "drinks",
  },
  {
    href: "/prisma-example",
    label: "prisma",
  },
  {
    href: "/tasks",
    label: "tasks",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8  max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Next.js
        </Link>
        <ul className="menu menu-horizontal md:ml-8 gap-2 ">
          {links.map((link) => {
            return (
              <li key={link.href}>
                <Link href={link.href} className="capitalize">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
