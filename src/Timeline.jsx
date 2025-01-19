import React, { useState } from 'react';

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const events = [
    {
      date: 'Mar 2020 - Present',
      title: 'Senior Software Engineer - Billing Systems, Tech Lead',
      description: 'SafetyCulture, Sydney, NSW\n' +
        '- Led enterprise billing system overhaul enabling custom contracts and pricing models\n' +
        '- Designed and built internal tooling platform for customer support teams with granular permissions\n' +
        '- Developed real-time customer activity tracking system with flexible architecture\n' +
        '- Migrated 100k+ legacy users to new platform, increasing trial conversions by 10%\n' +
        '- Implemented GDPR-compliant data retention policies across all services\n' +
        '- Mentored interns and led engineering workshops on distributed systems',
    },
    {
      date: 'Jun 2018 - Mar 2020',
      title: 'Full Stack Software Engineer',
      description: 'Snug, Sydney\n' +
        '- Delivered 3+ major features monthly across full stack\n' +
        '- Built leasing analytics dashboard providing real-time performance insights\n' +
        '- Developed appointment scheduling system handling 10k+ bookings monthly\n' +
        '- Created activity reporting tools improving operational transparency\n' +
        '- Optimized system performance, reducing API response times by 40%',
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8 sm:my-12 md:my-16 lg:my-24 transform perspective-1000 rotate-x-0 md:rotate-x-1">
      <ol className="relative left-1/2 transform -translate-x-1/2">
        {events.map((event, index) => (
          <li 
            key={index}
            id={`timeline-${index}`}
            className="group relative cursor-pointer transition-all duration-300 hover:bg-[#252526]/50 rounded-lg p-2 scroll-mt-[100px]"
            onClick={() => toggleExpand(index)}
          >
            <div className="flex-start flex items-center pt-1">
              <div className="-ms-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary group-hover:scale-125 transition-transform"></div>
              <h4 className="text-lg sm:text-xl font-semibold text-primary group-hover:text-[#8dff8d] transition-colors">
                {event.date}
              </h4>
            </div>
            <div className={`mb-6 ms-6 pb-6 text-left transition-all duration-300 ${expandedIndex === index ? 'opacity-100' : 'opacity-80'}`}>
              <h5 className="text-base sm:text-lg font-medium text-[#8dff8d] mb-2 terminal-text group-hover:underline">
                {event.title}
              </h5>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedIndex === index ? 'max-h-[500px] overflow-y-auto' : 'max-h-0'
                }`}
              >
                <p className="mb-4 mt-2 text-[#8dff8d] text-left terminal-text whitespace-pre-line">
                  {event.description}
                </p>
              </div>
              <div className="mt-2 text-sm text-[#8dff8d]/60">
                {expandedIndex === index ? '▲ Show Less' : '▼ Show More Details'}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
