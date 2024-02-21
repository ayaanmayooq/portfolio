

interface ExperienceCardProps {
  title: string;
  organization: string;
  organizationLink: string;
  date: string;
  points: string[];
  skills: string[];
}

export function ExperienceCard(cardData: ExperienceCardProps) {
  return (
    <div className='mt-3'>
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="mb-6">
          <h3 className="text-lg font-semibold">{cardData.title}</h3>
          <p className="text-gray-600">
            <a href={cardData.organizationLink} target="_blank" rel="noopener noreferrer" className="text-xl font-bold">
              <span className="link link-underline link-underline-black text-black">
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
            <div className='flex flex-wrap ml-4 mt-2 space-x-2 space-y-1'>
              {cardData.skills.map((skill, index) => (
                <p key={index} className="mt-1 items-center px-2 py-1 text-sm text-center text-white border-black bg-gray-400 rounded">
                  {skill}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}