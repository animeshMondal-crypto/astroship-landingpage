import React from "react";
import HeroIcon from "@/assets/hero.png";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";

function Hero() {
  return (
    <div className="my-10 grid md:grid-cols-2 grid-cols-1 gap-12 items-center w-full">
      <div className="flex flex-col gap-5 md:w-[110%] w-full">
        <h1 className="lg:text-7xl md:text-6xl text-3xl md:text-left text-center font-bold">
          Marketing website done with Astro
        </h1>
        <p className="text-slate-600 md:text-lg text-md text-justify md:w-[80%] w-full">
          Astroship is a starter template for startups, marketing websites &
          landing pages. Built with Astro.build and TailwindCSS. You can quickly
          create any website with this starter.
        </p>
        <div className="flex md:flex-row flex-col gap-3">
          <button className="bg-black text-white px-4 py-2.5 rounded-md flex gap-1 items-center justify-center hover:bg-black/85">
            <IoMdCloudDownload />
            Download for Free
          </button>
          <button className="border-2 border-black px-4 py-2.5 rounded-md flex gap-1 items-center justify-center hover:bg-slate-100">
            <FaGithub />
            Github Repo
          </button>
        </div>
      </div>
      <div className="md:col-start-2 row-start-1">
        <Image
          src={HeroIcon}
          width="500"
          height="450"
          alt="hero"
          className="animate-verticalMove"
        />
      </div>
    </div>
  );
}

export default Hero;
