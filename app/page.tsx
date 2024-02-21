"use client"
import { VerticalTabs } from '@/app/components/verticalTabs';

export default function Page() {
    return (
        
        <section className="animate-move-up-fade-in">
            <p>Hi, my name is</p>
            <div className="py-1">
                <p className=" text-2xl font-bold">Ayaan Mayooq</p>
            </div>
            <p>I am a senior year student at&nbsp;
                <a href="https://msu.edu/" className="link link-underline link-underline-black text-[#18453B] text-xl font-bold">Michigan State University</a>
                &nbsp;pursuing my BS/MS in Computer Science.</p>

            {/* <div className="mt-10 pb-40 ">
                <VerticalTabs />
            </div> */}

            <div className='flex flex-col justify-center'>

            <div className='m-5'>
                <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Teaching Assistant</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                    
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold">Teaching Assistant</h3>
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
                    
                    </a>
                </div>

                <div className='m-5'>
                <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Teaching Assistant</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
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
                </a>
                </div>

                <div className='m-5'>
                <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Teaching Assistant</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
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
                </a>
                </div>

            </div>



        </section>
        
    );
}