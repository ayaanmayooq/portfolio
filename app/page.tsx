"use client"
import { VerticalTabs } from '@/app/components/verticalTabs';
import { ExperienceCard } from '@/app/components/experienceCard';
import data from '@/public/data.json'

export default function Page() {

    return (
        
        <section className="animate-move-up-fade-in">
            <p>Hi, my name is</p>
            <div className="py-1">
                <p className=" text-4xl font-bold">Ayaan Mayooq</p>
            </div>
            <p>Senior year student at&nbsp;
                <a href="https://msu.edu/" className="link link-underline link-underline-black text-[#18453B] text-xl font-bold">Michigan State University</a>
                &nbsp;pursuing BS/MS in Computer Science.</p>
            <p>Always looking for opportunites to put my knowledge and skills to practical use.</p>

            <p className="mt-10 ml-1 text-2xl font-bold">Experience</p>
                {data['experiences'].map((experience, index) => (
                    <ExperienceCard key={index} {...experience} />
                ))}

        </section>
        
    );
}