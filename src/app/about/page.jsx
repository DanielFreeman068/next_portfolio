"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    {/* job cards */}
    <div className="relative z-0 flex flex-col items-center mt-20 font-segoe">
        <h1 className="text-4xl font-semibold text-white mb-10">My Job Experience</h1>
        <div className="flex flex-wrap justify-center gap-12 mx-8 relative z-0">  
            
            {/* Store Manager */}
            <div className="w-[290px] h-[435px] bg-gray-900 rounded-lg p-2 shadow-lg cursor-pointer group relative">
                {/* Folder Tab */}
                <div className="absolute left-0 top-0 w-12 h-full bg-gray-900 rounded-l-lg z-10" style={{ clipPath: "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)" }}></div>
                <div className="relative left-2 bg-gray-100 h-[410px] rounded-lg p-5 shadow-md transition-all duration-500 group-hover:translate-x-12 space-y-2">
                    <h4 className="text-xl font-bold text-center text-[#33419E]">General Manager</h4>
                    <h3 className="text-lg font-semibold text-center text-gray-700">Subway / December 2021 - Present</h3>
                    <p className="text-gray-700 font-bold mt-4">
                    - Overlooking store productions and managing employees <br /> <br />
                    - Ensures the store's functionality through scheduling, communications, weekly inventories, and delivery orders
                    </p>
                    <span className="absolute bottom-2 right-2 w-10 h-10 bg-yellow-400 text-white rounded-full flex items-center justify-center shadow-md">
                    🥪
                    </span>
                </div>
            </div>

            {/* Sandwich Artist */}
            <div className="w-[290px] h-[435px] bg-gray-900 rounded-lg p-2 shadow-lg cursor-pointer group relative">
                {/* Folder Tab */}
                <div className="absolute left-0 top-0 w-12 h-full bg-gray-900 rounded-l-lg z-10" style={{ clipPath: "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)" }}></div>
                <div className="relative left-2 bg-gray-100 h-[410px] rounded-lg p-5 shadow-md transition-all duration-500 group-hover:translate-x-12 space-y-2">
                    <h4 className="text-xl font-bold text-center text-[#33419E]">Sandwich Artist</h4>
                    <h3 className="text-lg font-semibold text-center text-gray-700">Subway / July 2021 - December 2021</h3>
                    <p className="text-gray-700 font-bold mt-4">
                    - Made sandwiches for customers <br /> <br />
                    - In charge of preparing food daily <br /> <br />
                    - Kept up with general cleanliness throughout the restaurant
                    </p>
                    <span className="absolute bottom-2 right-2 w-10 h-10 bg-yellow-400 text-white rounded-full flex items-center justify-center shadow-md">
                    🥪
                    </span>
                </div>
            </div>

            {/* Internship */}
            <div className="w-[290px] h-[435px] bg-gray-900 rounded-lg p-2 shadow-lg cursor-pointer group relative">
                {/* Folder Tab */}
                <div className="absolute left-0 top-0 w-12 h-full bg-gray-900 rounded-l-lg z-10" style={{ clipPath: "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)" }}></div>
                <div className="relative left-2 bg-gray-100 h-[410px] rounded-lg p-5 shadow-md transition-all duration-500 group-hover:translate-x-12 space-y-2">
                    <h4 className="text-xl font-bold text-center text-[#33419E]">Internship</h4>
                    <h3 className="text-lg font-semibold text-center text-gray-700">WBLA / January 2024 - February 2024</h3>
                    <p className="text-gray-700 font-bold mt-4">
                    - Online Internship with scheduled meetings and a professional mentor <br /> <br />
                    - Designed a website using HTML, CSS, and JavaScript
                    </p>
                    <span className="absolute bottom-2 right-2 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md">
                    💻
                    </span>
                </div>
            </div>
        </div>
    </div>
    {/* personal section */}
    <div className="flex flex-wrap justify-center mx-8 pt-12 gap-8 font-segoe">
        <div className="flex flex-col bg-gray-900 p-4 justify-center space-y-2 w-[400px] h-[350px] rounded-lg">
            <h1 className="text-center font-semibold text-white text-[40px]">Education</h1>
            <div className="flex flex-col space-y-2 p-4">
                <h1 className="text-[22px] text-white">West-MEC</h1>
                <ul className="list-disc pl-5">
                    <li className="text-white text-md">Full Stack Developer</li>
                    <li className="text-white text-md">HTML5 Application Development Certified</li>
                </ul>
                <h1 className="text-[22px] text-white">Homeschool</h1>
                <ul className="list-disc pl-5">
                    <li className="text-white text-md">Highschool Senior</li>
                    <li className="text-white text-md">4.0 GPA</li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col bg-gray-900 p-4 justify-center space-y-2 w-[400px] h-[350px] rounded-lg">
            <h1 className="text-center font-semibold text-white text-[40px]">Professional Skills</h1>
            <div className="flex flex-col space-y-2 p-4">
                <ul className="list-disc pl-5">
                    <li className="text-white text-2xl">Communication</li>
                    <li className="text-white text-2xl">Leadership</li>
                    <li className="text-white text-2xl">Problem Solving</li>
                    <li className="text-white text-2xl">Adaptability</li>
                    <li className="text-white text-2xl">Time Management</li>
                    <li className="text-white text-2xl">Diligence</li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col bg-gray-900 p-4 justify-center space-y-2 w-[400px] h-[350px] rounded-lg">
            <h1 className="text-center font-semibold text-white text-[40px]">Hobbies</h1>
            <div className="flex flex-col space-y-2 p-4">
            <ul className="list-disc pl-5">
                    <li className="text-white text-2xl">Coding</li>
                    <li className="text-white text-2xl">Mountain Biking</li>
                    <li className="text-white text-2xl">Soccer</li>
                    <li className="text-white text-2xl">Pickle Ball</li>
                    <li className="text-white text-2xl">Camping</li>
                    <li className="text-white text-2xl">Rock Climbing</li>
                </ul>
            </div>
        </div>
    </div>
    </>
);
}
