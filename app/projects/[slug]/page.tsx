"use client"
import projects from '@/public/projects.json'
import path from 'path';
import { notFound } from "next/navigation";

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
        <div className="relative top-0 left-0 p-4 animate-move-up-fade-in">
            <button onClick={handleGoBack} type="button" className="text-gray-600 duration-500 hover:text-black font-large rounded-full text-sm text-center inline-flex items-center ">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1M5 9l-4-4 4-4" />
                </svg>
                <span className="sr-only">left arrow</span>
            </button>

            <div className="mt-4">
                <h2 className="text-2xl font-bold">{project?.title}</h2>
                <p className="text-gray-600">{project?.description}</p>
                <img
                    src={project.imageUrl}
                    className="rounded-t-lg object-cover w-full h-3/4"
                    alt={`Image ${project.title}`}
                    width='200px'
                    height='auto'
                />
                {project.imageUrl}
            </div>
            
        </div>
    );
};