"use client"
import { VerticalTabs } from '@/app/components/verticalTabs';
import { ExperienceCard } from '@/app/components/experienceCard';

const experiences = [
    {
      "title": "Teaching Assistant",
      "organization": "MSU",
      "organizationLink": "https://msu.edu/",
      "date": "Aug 2022 - Present",
      "points": [
        "Courses: Computer Vision, Computer Networks, Matrix Algebra with Computational Applications.",
        "Guided academic success of students by conducting one-on-one mentorship sessions and collaborated with professors and TAs to enhance the course experience."
      ]
    },
    {
      "title": "MSU Capstone Software Developer",
      "organization": "Vectorform",
      "organizationLink": "https://www.vectorform.com/",
      "date": "Jan 2023 - May 2023",
      "points": [
        "Developed a Unity-based VR application that provides an innovative virtual training space for AI-enhanced training.",
        "Fine-tuned GPT-3 Davinci via Python on 300 conversations and optimized token utilization for context-driven responses, resulting in savings of 1000 tokens per conversation and a 4-second improvement in response times.",
        "Engineered a web application for training replay utilizing Angular, Node.js, and Azure SQL and blob storage.",
        "Integrated an embedded interactable WebGL build of a free-cam training replay system."
      ],
      "skills": ["Unity", "WebGL", "Angular"]
    },
    {
      "title": "Software Developer Intern",
      "organization": "Roosevelt Innovations",
      "organizationLink": "https://rooseveltinnovations.com/",
      "date": "May 2022 - Aug 2022",
      "points": [
        "Implemented an enterprise-level feature (using MEAN stack REST, JSON, Kafka, and containerization) that leverages client-specific information and quotes to accurately recommend insurance packages.",
        "Collaborated closely with underwriting and claims analysis experts to gain insights into claims handling processes.",
        "Utilized concepts of Machine Learning, AI, NLP, word embeddings, and Word2Vec to generate 94% of existing business insurance rules with 99% precision."
      ],
      "skills": ["MEAN stack", "REST", "JSON", "Kafka", "Machine Learning", "AI", "NLP", "Word embeddings", "Word2Vec"]
    }
  ];  

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
                 
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} {...experience} />
                ))}




        </section>
        
    );
}