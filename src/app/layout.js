import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterTheme from "./components/Footer";

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
        {children}
        <FooterTheme
          logoImage="/logo.png"
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
      </body>
    </html>
  );
}
