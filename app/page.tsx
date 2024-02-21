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

            <div className="mt-10 pb-40 ">
                <VerticalTabs />
            </div>




        </section>
        
    );
}