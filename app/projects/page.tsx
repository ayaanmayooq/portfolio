"use client"

import Link from 'next/link';
import projects from '@/public/projects.json';
import { GeistSans } from 'geist/font/sans';
import { ProjCard } from '@/app/components/projectCard';


export default function Page() {
    return (
        <div className=" columns-3 gap-8 space-y-8 mb-4 animate-move-up-fade-in">
            {projects.map((project: any, index: number) => (
                <div key={index} className="h-auto max-w-full">
                    <Link href={`/projects/${project.slug}`}>
                        <ProjCard key={index} {...project} />
                    </Link>
                </div>
            ))}
        </div>
        
    );
}