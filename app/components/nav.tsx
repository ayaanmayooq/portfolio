"use client"
import { LightDarkToggle } from './lightDarkToggle';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = {
    '/': {
        name: 'home',
    },
    '/projects': {
        name: 'projects',
    },
    '/resume.pdf': {
        name: 'resume',
    },
};

export function Navbar() {
    const pathname = usePathname()

    return (
        <div className='fixed top-8 w-full left-0 z-50'>
        <aside className="-ml-[8px] tracking-tight">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="flex flex-row justify-center relative fade md:overflow-auto scroll-pr-6 md:relative "
                    id="nav"
                >
                    <div className="flex flex-row space-x-0 bg-zinc-100 dark:bg-[#212121] px-5 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-700 duration-700">
                        {Object.entries(navItems).map(([path, { name }]) => {
                            return (
                                <span
                                    key={path}
                                    className={`transition-all text-black dark:text-white hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative 
                                    py-1 px-2 duration-500 ${pathname === path ? 'font-bold text-lg' : ''}`}
                                >
                                    {name == 'resume' ? (
                                        <a href={path} target="_blank" rel="noopener noreferrer" className=''>
                                            {name}
                                        </a>
                                    ) : (
                                        <Link href={path} className=''>
                                            {name}
                                        </Link>
                                    )}
                                </span>
                            );
                        })}
                        <LightDarkToggle/>
                    </div>
                </nav>
            </div>
        </aside>
        </div>
    );
}