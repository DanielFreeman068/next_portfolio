import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio | Daniel Freeman",
  description: "Revamped Portfolio using Next.JS",
  icons: {
    icon: "/favicon-16x16.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main>
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8 px-6 mt-8 w-full">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                
                {/* Site Map Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-orange-400">Site Map</h3>
                    <nav className="flex flex-col space-y-2">
                        <Link href="/" className="text-gray-300 hover:text-white transition duration-300">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-300 hover:text-white transition duration-300">
                            About Me
                        </Link>
                        <Link href="/projects" className="text-gray-300 hover:text-white transition duration-300">
                            Projects
                        </Link>
                    </nav>
                </div>

                {/* Connect with Me Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-orange-400">Connect with Me</h3>
                    <div className="flex justify-center md:justify-start space-x-4 text-2xl">
                        <a href="https://github.com/DanielFreeman068" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/daniel-freeman-438602351/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/daniel_freema8/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Copyright Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-orange-400">Legal</h3>
                    <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Daniel Freeman. All rights reserved.</p>
                </div>
            </div>
        </footer>
      </body>
    </html>
  );
}
