import type { Metadata } from "next";
import "../app/globals.css";
import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"


import { cn } from "@/lib/utils"

import Footer from "@/components/Footer";
import NavItem from "@/components/NavItem";
import { ModeToggle } from "@/components/ModeToogle";
import { SideNavbar } from "@/components/SideNavbar";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: process.env.TITLE,
  description: process.env.SUBTITLE,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased dark:bg-slate-800",
          fontSans.variable)}>
            <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            <>
            <SideNavbar />
               
            
            <ModeToggle />
            <div className="h-screen">
            <main className="flex flex-1">
              {children}
            </main>
            <Footer />
            </div>
            </>
          </ThemeProvider>
          </body>
    </html>
  );
}
