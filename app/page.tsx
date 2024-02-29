"use client"
import { VerticalTabs } from '@/app/components/verticalTabs';
import { ExperienceCard } from '@/app/components/experienceCard';
import { TextEncrypted } from '@/app/components/encryptText';
import data from '@/public/data.json'


export default function Page() {

    return (

        <section className="animate-move-up-fade-in">
            <div className="flex flex-col ml-1">
                <p>Hi, my name is</p>
                <div className="py-1 text-4xl font-bold">
                    <TextEncrypted text="Ayaan Mayooq" />
                    {/*<p className=" text-4xl font-bold">Ayaan Mayooq</p>*/}
                </div>
            
                <p>Senior year student at&nbsp;
                    <a href="https://msu.edu/" target="_blank" className="link link-underline link-underline-black text-[#18453B] text-xl font-bold">Michigan State University</a>
                    &nbsp;pursuing BS/MS in Computer Science.</p>
                <p>Always looking for opportunites to put my knowledge and skills to practical use.</p>
            </div>

            <p className="mt-10 mb-5 ml-1 text-2xl font-bold">Experience</p>
                {data['experiences'].map((experience, index) => (
                    <ExperienceCard key={index} {...experience} />
                ))}

                {/* <VerticalTabs></VerticalTabs>*/}
        </section>
    );
}