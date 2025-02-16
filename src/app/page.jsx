"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FooterTheme from "./components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    <div className="flex justify-between items-center bg-gray-900 py-4 mb-8 px-4">
      {/* Logo and Name */}
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <p className="font-courier text-white text-xl whitespace-nowrap overflow-hidden w-[8.5em] border-r-2 border-orange-500 animate-typing animate-blink">Daniel Freeman</p>
      </div>

      {/* Hamburger Icon (Bigger) */}
      <div className="block md:hidden flex items-center">
        <button className="text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 mr-4">
        <Link className="text-white font-segoe text-xl border-b-2 border-gray-900 hover:border-white transition duration-500" href="/">Home</Link>
        <Link className="text-white font-segoe text-xl border-b-2 border-gray-900 hover:border-white transition duration-500" href="/about">About Me</Link>
        <Link className="text-white font-segoe text-xl border-b-2 border-gray-900 hover:border-white transition duration-500" href="/projects">Projects</Link>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${ isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setIsMenuOpen(false)}>&times;</button>

        {/* Menu Items */}
        <div className="flex flex-col items-center gap-6 mt-20">
          <Link className="text-xl border-b-2 border-gray-900 hover:border-white transition duration-300" href="/">Home</Link>
          <Link className="text-xl border-b-2 border-gray-900 hover:border-white transition duration-300" href="/about">About Me</Link>
          <Link className="text-xl border-b-2 border-gray-900 hover:border-white transition duration-300" href="/projects">Projects</Link>
        </div>
      </div>
    </div>
    <div className="w-full flex justify-center p-6">
      <div className="flex flex-col justify-center md:flex-row bg-gray-900 bg-opacity-80 rounded-xl p-2 md:p-10 md:space-x-8 space-y-8">
        <Image className="rounded-[100px] shadow-lg mx-auto p-4 md:p-0" src='/shortchineseman.jpg' alt='picture of Daniel' width={300} height={300} />
        <div className="flex flex-col space-y-4 p-4">
          <h1 className="text-[40px] lg:text-[50px] text-white font-segoe">Daniel Freeman</h1>
          <h1 className="text-2xl text-white font-segoe">Description</h1>
          <p className="text-lg text-white font-segoe max-w-[300px]">Determined and reliable entry-level web developer looking to be a part of this organization, make a positive impact on it, and grow my experience. Well-rounded and driven developer with an understanding of a variety of programming languages such as HTML, CSS, JavaScript, and Python, as well as leadership and communication skills.</p>
        </div>
      </div>
    </div>
    <FooterTheme
          routes={{
            home: "/",
            about: "/about",
            projects: "/projects",
          }}
          socialLinks={{
            github: "https://github.com/DanielFreeman068",
            linkedIn: "https://www.linkedin.com/in/daniel-freeman-438602351/",
            instagram: "https://www.instagram.com/daniel_freema8/",
          }}
          webName="Daniel Freeman"
      />
    </>
  );
}
