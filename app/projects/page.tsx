"use client"

import Link from 'next/link';
import projects from '@/public/projects.json';
import { GeistSans } from 'geist/font/sans';
import { ProjCard } from '@/app/components/projectCard';
import { BentoGrid, BentoGridItem } from '../components/gridBento';
import { cn } from "@/utils/cn";



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
        // <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        //     {projects.map((project: any, index: number) => (
        //         // <div key={index} className="h-auto max-w-full">
        //         //     <Link href={`/projects/${project.slug}`}>
        //         //         <ProjCard key={index} {...project} />
        //         //     </Link>
        //         // </div>
        //         <BentoGridItem
        //         key={index}
        //         title={project.title}
        //         description={project.description}
        //         header=<img src={project.imageUrl}
        //                 className="rounded-t-lg object-cover w-full h-3/4"
        //                 alt={`Image ${project.title}`}
        //             />
        //         className={project.colSpan}
        //         icon={project.imageUrl}
        //       />
        //     ))}
        // </BentoGrid>

    );
}