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
          logoImage="/path-to-your-logo.png"
          routes={{
            home: "/",
            about: "/about",
            testimonials: "/testimonials",
            contact: "/contact",
            faqs: "/faqs",
          }}
          socialLinks={{
            github: "https://github.com/yourprofile",
            twitter: "https://twitter.com/yourprofile",
            linkedIn: "https://linkedin.com/in/yourprofile",
            instagram: "https://instagram.com/yourprofile",
            facebook: "https://facebook.com/yourprofile",
          }}
          webName="Daniel Freeman"
          address="Your Address Here"
        />
      </body>
    </html>
  );
}
