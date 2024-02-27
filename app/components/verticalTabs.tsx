import React, { useEffect, useState } from 'react';
import { GeistSans } from 'geist/font/sans';
import "../../global.css"
import { Experience } from '@/app/models/experience';
import data from '@/public/data.json'

export function VerticalTabs() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber: number) => {
        setActiveTab(tabNumber);
    };

    const experiences = data.experiences;

    return (
        <div className="container relative h-fit flex">
      <div>
        <div className="flex w-min flex-col">
          {experiences.map((experience, index) => (
            <button
              key={index}
              className={`px-10 flex-1 py-2 w-min border-l-2 cursor-pointer whitespace-nowrap duration-1000 ${activeTab === index ? 'border-l-2 border-gray-500 dark:border-gray-100 font-bold' : 'border-gray-200 dark:border-gray-600'}`}
              onClick={() => handleTabClick(index)}
            >
              {experience.organization}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col pl-4">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ${activeTab === index ? 'opacity-100  z-10 ' : 'opacity-0 '
              }`}
          >
            <div className={`py-2 ${activeTab === index ? 'visible' : 'hidden '}`}>
              <div className="mb-6">
                <h3 className="text-lg font-semibold">{experience.title}</h3>
                <p className="dark:text-gray-400 text-gray-600">
                  <a href={experience.organizationLink} target="_blank" className="text-xl font-bold">
                    <span className="link link-underline link-underline-black">
                      {experience.organization}
                    </span>
                  </a> | {experience.date}
                </p>
                <ul className="list-disc pl-6 mt-2">
                  {experience.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
                {experience.skills && experience.skills.length > 0 && (
                    <div className='flex flex-wrap ml-2 mt-4  space-y-1'>
                    {experience.skills.map((skill, index) => (
                        <p key={index} className="mt-1 items-center mx-1 px-3 py-1 text-sm text-center border border-black rounded-2xl">
                        {skill}
                        </p>
                    ))}
                    </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    );
}