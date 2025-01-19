import React, { useState } from 'react';

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const events = [
    {
      date: 'Mar 2020 - Present',
      title: 'Senior Software Engineer - Billing Systems, Tech Lead',
      description: '<span class="function">SafetyCulture</span>, Sydney, NSW\n' +
        '- <span class="keyword">Led</span> enterprise billing system overhaul enabling custom contracts and pricing models\n' +
        '- <span class="keyword">Designed</span> and <span class="keyword">built</span> internal tooling platform for customer support teams with granular permissions\n' +
        '- <span class="keyword">Developed</span> real-time customer activity tracking system with flexible architecture\n' +
        '- <span class="keyword">Led</span> migration of legacy billing plans to new platform, enabling feature rollout\n' +
        '- <span class="keyword">Implemented</span> GDPR-compliant data retention policies, setting an example for other teams to follow\n' +
        '- <span class="keyword">Mentored</span> interns and led engineering workshops on distributed systems',
    },
    {
      date: 'Jun 2018 - Mar 2020',
      title: 'Full Stack Software Engineer',
      description: '<span class="function">Snug</span>, Sydney\n' +
        '- <span class="keyword">Delivered</span> 3+ major features monthly across full stack\n' +
        '- <span class="keyword">Built</span> leasing analytics dashboard providing real-time performance insights\n' +
        '- <span class="keyword">Developed</span> appointment scheduling system handling 10k+ bookings monthly\n' +
        '- <span class="keyword">Created</span> activity reporting tools improving operational transparency\n' +
        '- <span class="keyword">Optimized</span> system performance, reducing API response times by 40%',
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8">
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
                <p className="mb-4 mt-2 text-[#8dff8d] text-left terminal-text whitespace-pre-line" dangerouslySetInnerHTML={{ __html: event.description }} />
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
