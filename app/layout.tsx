import '../global.css'
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from '@/app/components/nav'


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en"
            className={`${GeistSans.className} text-black bg-white dark:text-white dark:bg-[#111010]`}>
            <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
                <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                    {/* Navbar */}
                    <Navbar />
                
                    {children}
                </main>
            </body>

        </html>
    )
}