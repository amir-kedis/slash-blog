"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useCursor } from "@/utils/CursorContext";

import logoSrc from "@/../public/slash-logo.png";

const navLinks = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/posts/create",
    text: "Write",
  },
];

export default function Nav() {
  const path = usePathname();
  const { setCursorText, setCursorScale } = useCursor();

  const handleMouseEnter = () => {
    setCursorText(">");
    setCursorScale(3);
  };

  const handleMouseLeave = () => {
    setCursorText("");
    setCursorScale(1);
  };

  return (
    <nav className="flex text-xl py-2 justify-between items-center container mx-auto font-playfair-display">
      <Image src={logoSrc} alt="Slash Logo" placeholder="blur" width={65} />
      <div className="flex gap-4">
        {navLinks.map((link) => {
          const isActive = path === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${isActive ? "underline" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {link.text}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
