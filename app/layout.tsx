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
import { Providers } from './providers';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
    }) {
    const pathname = usePathname();
    return (
        <html lang="en" suppressHydrationWarning>
{/*            <Head>
                <link rel="shortcut icon" href="./favicon.ico" />
            </Head>*/}

            <body className={`${GeistSans.className} bg-white dark:bg-[#141414]  dark:text-white antialiased max-w-3xl h-screen flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto transition-colors duration-500`}>
                <main className="flex-auto min-w-0 mt-6 h-full flex flex-col px-2 md:px-0">
                    {/* Navbar */}
                    <Navbar />
                
                    
                    <div className="">
                        {children}
                    </div>

                    <div className="m-auto"></div>

                    <div className="flex flex-col justify-center">
                        <hr className="mt-20 w-full border-3" />
                        <Footer />
                    </div>
                </main>

            </body>

            

        </html>
    )
}