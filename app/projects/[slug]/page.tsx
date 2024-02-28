"use client"
import projects from '@/public/projects.json'
import path from 'path';
import { notFound } from "next/navigation";
import Link from 'next/link';
import { RevealOnScroll } from '@/app/components/effects';
import example from '@/public/example.mdx';
import { MDXRemote } from 'next-mdx-remote/rsc'


interface ProjectData {
    imageUrl: string;
    title: string;
    slug: string;
    description: string;
    technologies: string[];
}

interface PageProps {
    projectData: ProjectData;
}

export default function Page({
    params
}: {
    params: {slug: String}
}) {

    const handleGoBack = () => {
        window.history.back();
    };

    const project = projects.find(project => project.slug === params.slug);
    if (!project) {
        notFound();
    }

    return (
        
        <div className="relative top-0 left-0 animate-move-up-fade-in">
            <button onClick={handleGoBack} type="button" className="text-gray-600 dark:text-gray-200 duration-500 hover:text-black dark:hover:text-white font-large rounded-full text-sm text-center inline-flex items-center ">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1M5 9l-4-4 4-4" />
                </svg>
                <span className="sr-only">left arrow</span>
                &nbsp;back to projects
            </button>
{/*             
            <div className='flex justify-center'>
                <div className="relative h-64 w-64">
                    <div
                        className="absolute -inset-2 rounded-lg bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-75 blur"
                    ></div>
                    <div
                        className="relative flex h-64 w-64 items-center justify-center rounded-lg bg-zinc-900 text-slate-300"
                    >
                        <h2 className="text-4xl font-bold">{project?.title}</h2>
                    </div>
                </div>
            </div> */}
                
            <div className="mt-4 flex flex-col items-center border-black dark:border-gray-500 rounded-lg">
                <div className='text-center dark:text-white py-20 px-8'>
                

                    <h2 className="text-4xl font-bold">{project?.title}</h2>
                    <p className="mt-5 px-16 text-gray-700 dark:text-gray-400">{project?.description}</p>
                    
                    <div className='mt-2 flex flex-wrap justify-center space-y-1'>
                        {project.technologies.map((tech: String, index: number) => (
                            <p key={index} className="mt-1 items-center mx-1 px-3 py-1 text-xs text-center border border-black dark:border-white rounded-lg">
                                {tech}
                            </p>
                        ))}
                    </div>
                    {project?.githubLink && (
                    <div className='mt-10'>
                        <Link href={project.githubLink} className="duration-500 hover:font-bold" target='_blank'>
                            GitHub -{'>'}
                        </Link>
                    </div>
                    )}
                </div>
                {/* Could add a featured image gallery layout later on. */}
                <img
                    src={project.imageUrl}
                    className="border border-zinc-300 dark:border-zinc-600 rounded object-cover w-3/4"
                    alt={`Image ${project.title}`}
                    width='200px'
                    height='auto'
                />
                
                <div>
                    <ul className="py-16 px-16 text-gray-700 dark:text-gray-300 list-disc">
                        {project.content.map((paragraph, index) => (
                        <li key={index} className="mb-4">{paragraph}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
        
    );
};