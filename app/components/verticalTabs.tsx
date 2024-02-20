import React, { useEffect, useState } from 'react';
import { GeistSans } from 'geist/font/sans';
import "../../global.css"

export function VerticalTabs() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber: number) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="container relative flex">
            <div className="tabs flex flex-col">
                <a
                    className={`tab px-10 flex-1 py-2 border-l-2 cursor-pointer duration-1000 ${activeTab === 1 ? 'border-l-2 border-gray-500 font-bold' : ''}`}
                    href="#"
                    data-tab="1"
                    onClick={() => handleTabClick(1)}
                >
                    Michigan State University
                </a>
                <a
                    className={`tab px-10 flex-1 py-2 border-l-2 cursor-pointer duration-1000 ${activeTab === 2 ? 'border-l-2 border-gray-500 font-bold' : ''
                        }`}
                    href="#"
                    data-tab="2"
                    onClick={() => handleTabClick(2)}
                >
                    Vectorform
                </a>
                <a
                    className={`tab px-10 flex-1 py-2 border-l-2 cursor-pointer duration-1000 ${activeTab === 3 ? 'border-l-2 border-gray-500 font-bold' : ''
                        }`}
                    href="#"
                    data-tab="3"
                    onClick={() => handleTabClick(3)}
                >
                    Roosevelt Innovations
                </a>
            </div>

            <div className="flex pl-4">
                <div
                    className={`absolute py-2 transition-opacity duration-1000 ${activeTab === 1 ? 'opacity-100 z-10' : 'opacity-0'
                        }`}
                    data-tab="1"
                >
                    <div>
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold">Teaching Assitant</h3>
                            <p className="text-gray-600">
                                <a href="https://msu.edu/" target="_blank" className="text-xl font-bold">
                                    <span className="link link-underline link-underline-black text-black">
                                        MSU
                                    </span>
                                </a> | Aug 2022 - Present</p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>Courses: Computer Vision, Computer Networks, Matrix Algebra with Computational Applications.</li>
                                <li>Guided academic success of students by conducting one-on-one mentorship sessions and collaborated with professors and
                                    TAs to enhance the course experience.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div
                    className={`absolute py-2 transition-opacity duration-1000 ${activeTab === 2 ? 'opacity-100 z-10' : 'opacity-0'
                        }`}
                    data-tab="2"
                >
                    <div>
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold">MSU Capstone Software Developer</h3>
                            <p className="text-gray-600">
                                <a href="https://www.vectorform.com/" target="_blank" className="text-xl font-bold">
                                    <span className="link link-underline link-underline-black text-black">
                                        Vectorform
                                    </span>
                                </a> | Jan 2023 - May 2023</p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>Developed a Unity-based VR application that provides an innovative virtual training space for AI-enhanced training.</li>
                                <li>Fine-tuned GPT-3 Davinci via Python on 300 conversations and optimized token utilization for context-driven responses,
                                    resulting in savings of 1000 tokens per conversation and a 4-second improvement in response times.</li>
                                <li>Engineered a web application for training replay utilizing Angular, Node.js, and Azure SQL and blob storage.</li>
                                <li>Integrated an embedded interactable WebGL build of a free-cam training replay system.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div
                    className={`absolute py-2 transition-opacity duration-1000 ${activeTab === 3 ? 'opacity-100 z-10' : 'opacity-0'
                        }`}
                    data-tab="3"
                >
                    <div>
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold">Software Developer Intern</h3>
                            <p className="text-gray-600">
                                <a href="https://rooseveltinnovations.com/" target="_blank" className="text-xl font-bold leading-tight">
                                    <span className="link link-underline link-underline-black text-black">
                                        Roosevelt Innovations
                                    </span>
                                </a> | May 2022 - Aug 2022</p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>Implemented an enterprise-level feature (using MEAN stack REST, JSON, Kafka, and containerization) that leverages
                                    clientspecific information and quotes to accurately recommend insurance packages.</li>
                                <li>Collaborated closely with underwriting and claims analysis experts to gain insights into claims handling processes.</li>
                                <li>Utilized concepts of Machine Learning, AI, NLP, word embeddings, and Word2Vec to generate 94% of existing business
                                    insurance rules with 99% precision.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}