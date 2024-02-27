"use client"
import projects from '@/public/projects.json'
import path from 'path';
import { notFound } from "next/navigation";
import Link from 'next/link';

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

/*export async function generateStaticParams() {
    return data.projects;
}*/

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
            <button onClick={handleGoBack} type="button" className="text-gray-600 duration-500 hover:text-black font-large rounded-full text-sm text-center inline-flex items-center ">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1M5 9l-4-4 4-4" />
                </svg>
                <span className="sr-only">left arrow</span>
            </button>

            <div className="mt-4 border bg-black border-black dark:border-white rounded-lg">
                <div className='text-center  text-white py-20 px-8'>
                    <h2 className="text-4xl font-bold">{project?.title}</h2>
                    <p className="mt-5 px-16 text-gray-400">{project?.description}</p>
                    
                    {}
                    <div className='mt-2 flex flex-wrap justify-center space-y-1'>
                        {project.technologies.map((tech: String, index: number) => (
                            <p key={index} className="mt-1 items-center mx-1 px-3 py-1 text-xs text-center border border-white rounded-lg">
                                {tech}
                            </p>
                        ))}
                    </div>
                    {project?.githubLink && (
                    <div className='mt-10'>
                        <Link href={'https://github.com/ayaanmayooq/eduhack'} className="duration-500 hover:font-bold" target='_blank'>
                            GitHub -{'>'}
                        </Link>
                    </div>
                    )}
                </div>
                {/* Could add a featured image gallery layout later on. */}
                <img
                    src={project.imageUrl}
                    className="object-cover w-full h-3/4"
                    alt={`Image ${project.title}`}
                    width='200px'
                    height='auto'
                />
                <div>
                <p className="py-16 px-16 text-gray-400 whitespace-pre-line">{project.content}</p>
                </div>
            </div>
            
        </div>
    );
};