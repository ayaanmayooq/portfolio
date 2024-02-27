import { RevealOnScroll } from '@/app/components/effects';
import { Experience } from '@/app/models/experience';

export function ExperienceCard(cardData: Experience) {
    return (
      <RevealOnScroll>
    <div className='mt-2 p-1'>
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-xl dark:shadow-[#555555] dark:bg-[#141414] dark:border-gray-200 text-black dark:text-white duration-500">
        <div className="ml-2 mb-6">
          <h3 className="text-lg font-semibold">{cardData.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 duration-500">
            <a href={cardData.organizationLink} target="_blank" rel="noopener noreferrer" className="text-xl font-bold">
              <span className="link link-underline link-underline-black">
                {cardData.organization}
              </span>
            </a> | {cardData.date}
          </p>
          <ul className="list-disc pl-6 mt-2">
            {cardData.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          {cardData.skills && cardData.skills.length > 0 && (
            <div className='flex flex-wrap ml-2 mt-4  space-y-1'>
              {cardData.skills.map((skill, index) => (
                <p key={index} className="mt-1 items-center mx-1 px-3 py-1 text-sm text-center border border-black dark:border-white rounded-2xl">
                  {skill}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
            </div>
        </RevealOnScroll>
  );
}