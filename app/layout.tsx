"use client";

import React, { useState } from 'react';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, UserButton } from "@clerk/nextjs";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <SignedIn>
            <nav className="navbar">
              <div className="branding">
                <span className="circle"></span>
                <span className="companyName">PROCESS PULSE</span>
              </div>
              <div className="linkContainer">
                <Link href="/" className="link">Overview</Link>
                <Link href="/leadList" className="link">Lead List</Link>
                <Link href="/callLogs" className="link">Call Logs</Link>
                <Link href="/appointments" className="link">Appointments</Link>
                <Link href="/followUp" className="link">Follow Up Schedule</Link>
                <div className="user-button-container">
                  <UserButton /> {/* Display UserButton in the desktop view */}
                </div>
              </div>
              <button className="hamburger" onClick={toggleMenu}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
            </nav>

            {isMenuOpen && (
              <div className="mobile-menu-overlay">
                <button className="close-button" onClick={toggleMenu}>✕</button>
                <div className="mobile-menu-links">
                  <Link href="/" className="link" onClick={toggleMenu}>Overview</Link>
                  <Link href="/leadList" className="link" onClick={toggleMenu}>Lead List</Link>
                  <Link href="/callLogs" className="link" onClick={toggleMenu}>Call Logs</Link>
                  <Link href="/appointments" className="link" onClick={toggleMenu}>Appointments</Link>
                  <Link href="/followUp" className="link" onClick={toggleMenu}>Follow Up Schedule</Link>
                  <div className="menu-account-info">
                    <UserButton /> {/* Displays Clerk account info and sign-out option */}
                  </div>
                </div>
              </div>
            )}

            <main>{children}</main>
          </SignedIn>

          {/* Redirect to sign-in page if not authenticated */}
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}