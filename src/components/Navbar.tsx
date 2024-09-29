import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className=" h-16 px-4 md:px-7 lg:px-14 xl:px-28 2xl:px-60 relative">
      {/* MOBILE */}
      <div className="md:hidden flex items-center justify-between h-full">
        <Link href={"/"}>
          <Image src="/Logo.png" alt="logo" width={65} height={65} />
        </Link>
        <Menu />
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex items-center justify-between gap-6 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center ">
          <Link href={"/"} className="flex items-center pr-20">
            <Image src="/Logo.png" alt="logo" width={50} height={50} />
            <div className="text-2xl tracking-wider">AURELIA</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Shop</Link>
            <Link href={"/"}>Deals</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
