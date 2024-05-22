"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { DropdownMenuDemo } from "./features-dropdown";

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [featureDropdown, setFeatureDropdown] = useState(false);
  return (
    <div className="mb-20 md:px-10 px-5 py-5">
      <nav className="flex items-center justify-between">
        <div>
          <h1 className="text-xl">
            <span className="font-bold">Astro</span>
            <span className="text-slate-600">ship</span>
          </h1>
        </div>
        <div>
          <ul className="md:flex md:items-center gap-10 md:gap-8 text-slate-600 hidden cursor-pointer">
            <li
              className="flex items-center"
              onClick={() => setFeatureDropdown(!featureDropdown)}
            >
              <DropdownMenuDemo /> <FaAngleDown />
            </li>
            <li>Pricing</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="md:flex hidden items-center gap-5">
          <Link href="/">Log in</Link>
          <Link
            href="/"
            className="bg-black text-white md:px-4 md:py-2.5 rounded-md hover:bg-black/80"
          >
            Sign up
          </Link>
        </div>
        {isOpen ? (
          <IoClose size={30} onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <IoMenu
            size={30}
            className="md:hidden block"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </nav>
      {isOpen && (
        <div>
          <ul className="text-slate-600 space-y-3 mt-5 cursor-pointer">
            <li className="">
              <div
                className="flex items-center"
                onClick={() => setFeatureDropdown(!featureDropdown)}
              >
                Features {featureDropdown ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              {featureDropdown && (
                <ul className="mt-2 space-y-2 pl-2">
                  <li>Action</li>
                  <li>Another Action</li>
                  <li>Dropdown Submenu</li>
                  <li>404 Page</li>
                </ul>
              )}
            </li>
            <li>Pricing</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <div className="mt-4 flex justify-center items-center text-center gap-5">
            <Link
              href="/"
              className="bg-slate-200 px-4 py-2.5 rounded-md hover:bg-slate-300 w-1/2"
            >
              Log in
            </Link>
            <Link
              href="/"
              className="bg-black text-white px-4 py-2.5 rounded-md hover:bg-black/80 w-1/2"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainNav;
