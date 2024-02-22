//https://www.julienthibeaut.xyz/blog/create-tilt-effect-with-react

import { useState, MouseEvent, useCallback } from "react";

function throttle<T extends (...args: any[]) => any>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

interface Project {
    imageUrl: string;
    title: string;
    description: string;
    technologies: string[];
    // Add any other properties as needed
}

export function ProjCard(project: Project) {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const onMouseMove = useCallback(
        throttle((e: MouseEvent<HTMLDivElement>) => {
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const centerX = box.width / 2;
            const centerY = box.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            setRotate({ x: rotateX, y: rotateY });
        }, 100),
        []
    );

    const onMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <>
            <div
                className="card relative rounded-xl bg-white transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform"
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{
                    width: "auto",
                    height: "auto",
                    transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
                    transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                }}
            >
                <div className="pulse absolute -inset-2 rounded-lg bg-gradient-to-r from-gray-400 via-gray-400 to-gray-400 opacity-75 blur-xl" />
                <div className="relative flex flex-col h-full w-full select-none items-center justify-center rounded-lg overflow-hidden">
                    <img
                        src={project.imageUrl}
                        className="rounded-t-lg object-cover w-full h-3/4"
                        alt={`Image ${project.title}`}
                    />
                    <div className="bg-white dark:bg-[#111010] p-4 w-full h-1/4 rounded-b-lg border-1 border-black border-t">
                        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                        <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                    </div>
                </div>
            </div>

        </>
    );
};
