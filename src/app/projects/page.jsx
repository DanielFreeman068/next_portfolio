"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FooterTheme from "../components/Footer";

export default function Home() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

//project data
const projects = [
    {
    title: "Tic-Tac-Toe",
    image: "/tictactoeImage.png",
    githubLink: "https://danielfreeman068.github.io/TicTacToe/",
    description: "A classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript.",
    },
    {
    title: "Card Memory",
    image: "/cardmemoryImage.png",
    githubLink: "https://danielfreeman068.github.io/Card-Memory/",
    description: "A memory card game where you match pairs of cards.",
    },
    {
    title: "Photo Gallery",
    image: "/photogalleryImage.png",
    githubLink: "https://danielfreeman068.github.io/ResponsiveGallery/",
    description: "A responsive photo gallery showcasing various images.",
    },
    {
    title: "Calculator",
    image: "/calculatorImage.png",
    githubLink: "https://danielfreeman068.github.io/calculator/",
    description: "A simple calculator with basic arithmetic operations.",
    },
    {
    title: "Hang Man",
    image: "/hang.png",
    githubLink: "https://danielfreeman068.github.io/Hangman/",
    description: "A word guessing game where you try to figure out the hidden word.",
    },
];

const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

const handleProjectChange = (index) => {
    setCurrentProjectIndex(index);
};

const currentProject = projects[currentProjectIndex];
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
    {/* projects section */}
    <div className="p-6">
        <h2 className="text-4xl text-center mb-6">My Coding Projects</h2>
        <div className="flex justify-center space-x-6 mb-6">
            {projects.map((project, index) => (
            <button key={index} className={`px-4 py-2 text-sm font-semibold rounded-md ${ index === currentProjectIndex ? "bg-gray-900 text-white" : "bg-gray-300 text-gray-800"}`} onClick={() => handleProjectChange(index)}>
                {project.title}
            </button>
            ))}
        </div>
        <div className="max-w-xl mx-auto bg-gray-900 rounded-lg shadow-md p-4">
            <h3 className="text-2xl font-semibold text-center mb-4">{currentProject.title}</h3>
            <div className="relative w-full h-64 mb-4">
                <Image src={currentProject.image} alt={currentProject.title} layout="fill" className="rounded-md" style={{ objectFit: "cover" }}></Image>
            </div>
            <p className="text-center mb-4 text-white">{currentProject.description}</p>
            <a href={currentProject.githubLink} target="_blank" rel="noopener noreferrer" className="block text-center text-purple-600 underline">
                View on GitHub
            </a>
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
