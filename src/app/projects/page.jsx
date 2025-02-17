"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FooterTheme from "../components/Footer";

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
        <div className={`fixed z-50 top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${ isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
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
    <h1>Placeholder Projects</h1>
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
