"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image"; // Importing Image component from Next.js
import Stairs from "./Stairs";


const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Accessibility Title */}
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

        {/* Logo and Image */}
        <div className="mt-32 mb-10 text-center text-2xl">
            
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Karthikeyan<span className="text-accent">.S</span>
            </h1>
          </Link>

          {/* Add Image here */}
         
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 items-center" style={{ marginTop: "-1.5rem" }}>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-lg capitalize ${
                pathname === link.path ? "text-accent font-bold" : "text-white"
              }`}
            >
              {link.name}
              
            </Link>
          ))}
          <Stairs />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
