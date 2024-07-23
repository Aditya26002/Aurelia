"use client";
import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <img
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute top-20 left-0 w-full h-[clac(100vh-80px)] bg-black text-white flex flex-col items-center justify-center text-xl gap-8 z-10 py-8">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Services</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>LogOut</Link>
          <Link href={"/"}>Cart {1}</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
