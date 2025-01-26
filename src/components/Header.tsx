"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { TbShoppingBagPlus } from "react-icons/tb";

const navLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Upload",
    href: "/upload",
  },
  {
    label: "Beats",
    href: "/beats",
  },
  {
    label: "Drum Kits",
    href: "/drum-kits",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];

const Header = () => {
  const currentPath = usePathname();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-700 bg-neutral-900 px-20">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-[14px]">
          <Image
            src="/bucket.svg"
            alt="logo"
            width={20}
            height={20}
            className="bg-neutral-300 shadow rounded-full"
          />
          <span
            className={`${
              currentPath === "/"
                ? "text-green-400"
                : "text-neutral-300 hover:text-green-400"
            } transition-all`}
          >
            <Link href="/">DirtyBucket</Link>
          </span>
        </div>
        <ul className="flex space-x-8 py-4 text-[14px]">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={`${
                currentPath === link.href
                  ? "text-green-400"
                  : "text-neutral-300 hover:text-green-400"
              } transition-all`}
            >
              <li>{link.label}</li>
            </Link>
          ))}
        </ul>
        <Link
          href="/cart"
          className="flex items-center justify-center space-x-2"
        >
          <span>Cart</span>
          <TbShoppingBagPlus />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
