"use client"

import Link from 'next/link';
import '../global.css'
import type { Metadata } from 'next';
import Head from 'next/head';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from '@/app/components/nav'
import { Footer } from '@/app/components/footer';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from './components/theme-provider';
import { SplashScreen } from './components/splash';
import path from 'path';
import { useEffect, useState } from 'react';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
    }) {
    const pathname = usePathname();
    const isHome = pathname == '/';
    const [isAnimationInProgress, setIsAnimationInProgress] = useState(true);

    useEffect(() => {
        if (isAnimationInProgress) {
            document.body.style.overflow = 'hidden'; // Disable scrolling during animation
        } else {
            document.body.style.overflow = 'visible'; // Re-enable scrolling after animation
        }
    }, [isAnimationInProgress]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsAnimationInProgress(false);
        }, 0);

        return () => {
            clearTimeout(timeoutId);
            document.body.style.overflow = 'visible'; // Ensure scrolling is re-enabled on unmount
        };
    }, []);

    return (
        <html lang="en" suppressHydrationWarning>

            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem>

            <body className={`${GeistSans.className} bg-white dark:bg-[#121212] dark:text-white antialiased max-w-3xl h-screen flex flex-col md:flex-row lg:mx-auto transition-all duration-500`}>
                {/* {isAnimationInProgress && isHome ? (
                    <SplashScreen/>
                ):( */}
                <main className="flex-auto min-w-0 h-full flex flex-col md:px-0">
                <div className="reveal-line-up border-b border-zinc-400">
                    </div>
                <div className="reveal-line-down border-t border-zinc-400">
                </div>

                    <Navbar />                
                    <div className="mt-40">
                        {children}
                    </div>

                    <div className="m-auto"></div>

                    <div className="flex flex-col justify-center">
                        <hr className="mt-20 w-full border-3 border-red" />
                        <Footer />
                    </div>
                </main>
                {/* )} */}
          
            </body>

            </ThemeProvider>

        </html>
    )
}