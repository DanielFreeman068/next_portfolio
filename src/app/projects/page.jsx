"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from 'lucide-react';
import projects from '../data/projects.json'

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

// //project data
// const projects = [
//     {
//     title: "Pet Adoption Platform",
//     image: "/petAdoptionImage.png",
//     githubLink: "https://github.com/DanielFreeman068/Pet-Adoption-Platform",
//     description: "A full stack pet adoption platform connected to MongoDB. This project uses EJS and NodeJS to allow viewers to search and filter for pets and signed up users to surrender pets for adoption.",
//     },
//     {
//     title: "Event Registration",
//     image: "/eventRegistrationImage.png",
//     githubLink: "https://github.com/DanielFreeman068/EJS--Event-Registration.git",
//     description: "This project is an Event Registration site that uses EJS and JSON files to store and display data. Users can sign up for events while admins can delete and edit.",
//     },
//     {
//     title: "Card Game API",
//     image: "/blackjackImage.png",
//     githubLink: "https://github.com/DanielFreeman068/Card-Game-API.git",
//     description: "This project uses the deckofcardsAPI for users to play games of either Blackjack or War",
//     },
//     {
//     title: "Quizzy Bee",
//     image: "/reactQuizImage.png",
//     githubLink: "https://github.com/DanielFreeman068/react_quiz_app.git",
//     description: "Quizzy Bee is a full responsive quiz app created in react that tests users on the beautiful sport of Soccer",
//     },
//     {
//     title: "Blog",
//     image: "/blogImage.png",
//     githubLink: "https://github.com/DanielFreeman068/react_blog.git",
//     description: "This is a full stack blog that uses react to format and deliver a variety of information on trending news for various topics.",
//     },
//     {
//     title: "Tic-Tac-Toe",
//     image: "/tictactoeImage.png",
//     githubLink: "https://github.com/DanielFreeman068/TicTacToe.git",
//     description: "A classic two player Tic-Tac-Toe game built with HTML, CSS, and JavaScript.",
//     },
//     {
//     title: "API Project",
//     image: "/APIImage.png",
//     githubLink: "https://github.com/DanielFreeman068/myAPI.git",
//     description: "An API project that provides JSON data of 50 musical artists including instructions on how to retrieve said data.",
//     },
//     {
//     title: "Card Memory Game",
//     image: "/cardmemoryImage.png",
//     githubLink: "https://github.com/DanielFreeman068/Card-Memory.git",
//     description: "A memory card game where you match pairs of cards. This project uses HTML, JavaScript, and CSS to put together a cohesive card memory game.",
//     },
//     {
//     title: "Calculator",
//     image: "/calculatorImage.png",
//     githubLink: "https://github.com/DanielFreeman068/calculator.git",
//     description: "A simple calculator with basic arithmetic operations.",
//     },
//     {
//     title: "Hang Man",
//     image: "/hang.png",
//     githubLink: "https://github.com/DanielFreeman068/Hangman.git",
//     description: "A word guessing game where you try to figure out the hidden word. This project uses HTML, JavaScript, and CSS to form a working Hangman game.",
//     },
// ];

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
    {/* Projects Gallery */}
    {/* <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-center">
        {projects.map((project, index) => (
            <div key={index} className="w-[300px] md:w-[400px] cursor-pointer transform transition-transform hover:scale-105" onClick={() => setSelectedProject(project)}>
                <div className="relative h-48 md:h-60 rounded-sm overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover"/>
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </div> */}

    <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-white text-center mb-6">Projects</h1>
        <div className="flex flex-wrap gap-4 justify-center">
            {projects.map((project) => (
                <div key={project.id} className="w-[300px] md:w-[400px] cursor-pointer transform transition-transform hover:scale-105">
                    <Link href={`/projects/${project.id}`} className="block">
                        <div className="relative h-48 md:h-60 rounded-sm overflow-hidden">
                            <Image src={project.image} alt={project.title} fill className="object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>

    {/* Modal */}
    {/* {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center p-4 z-50">
            <div className="bg-gray-100 rounded-lg w-[375px] md:w-[450px] max-w-2xl relative">
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors">
                    <X className="w-6 h-6" />
                </button>
                
                <div className="p-6 mt-8">
                    <div className="relative h-48 md:h-60 mb-4 w-[320px] md:w-[400px] mx-auto">
                        <Image src={selectedProject.image} alt={selectedProject.title} fill objectFit="cover" className="rounded-md"/>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-4 text-black">{selectedProject.title}</h2>
                    <p className="text-gray-800 mb-4">{selectedProject.description}</p>
                    
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-900 text-orange-400 font-semibold px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">View Project</a>
                </div>
            </div>
        </div>
    )} */}
    </>
);
}
