"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="pt-4 xl:pt-6 py-4 xl:py-8 text-white">
      <div className="container mx-auto flex items-center justify-between xl:justify-between">
        {/* Logo */}
        <Link href="/" className="w-full xl:w-auto text-center xl:text-left">
          <h1 className="text-4xl font-semibold">
            Karthik<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
