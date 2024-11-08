import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Process Pulse",
  description: "AI-driven automation for real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}