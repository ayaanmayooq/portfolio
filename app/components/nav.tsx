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
        <aside className="-ml-[8px] mb-16 tracking-tight">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                    id="nav"
                >
                    <div className="flex flex-row space-x-0 pl-10 ml-auto">
                        {Object.entries(navItems).map(([path, { name }]) => {
                            return (
                                <span
                                    key={path}
                                    className={`transition-all text-black dark:text-white hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative 
                                    py-1 px-2 duration-500 ${pathname === path ? 'font-bold' : ''}`}
                                >
                                    {name == 'resume' ? (
                                        <a href={path} target="_blank" rel="noopener noreferrer">
                                            {name}
                                        </a>
                                    ) : (
                                        <Link href={path}>
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
    );
}