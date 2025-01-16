import React, { useState } from 'react';

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const events = [
    { 
      date: 'Mar 2020 - Present', 
      title: 'Senior Software Engineer - Billing Systems, Tech Lead', 
      description: 'SafetyCulture, Sydney, NSW\n' +
        '- Led billing system enhancements for enterprise customers\n' +
        '- Designed internal tooling platform architecture\n' +
        '- Implemented Salesforce sales order process optimization\n' +
        '- Built real-time customer activity logging system\n' +
        '- Managed backend community and mentorship programs',
    },
    { 
      date: 'Jun 2018 - Mar 2020', 
      title: 'Software Engineer', 
      description: 'Snug, Sydney\n' +
        '- Delivered 3+ major full-stack features monthly\n' +
        '- Developed analytics dashboard for leasing agencies\n' +
        '- Built appointment scheduling system\n' +
        '- Created agent activity reporting feature',
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8 sm:my-12 md:my-16 lg:my-24 transform perspective-1000 rotate-x-0 md:rotate-x-1">
      <ol className="border-s-2 border-primary/50">
        {events.map((event, index) => (
          <li 
            key={index}
            className="group relative cursor-pointer transition-all duration-300 hover:bg-[#252526]/50 rounded-lg p-2"
            onClick={() => toggleExpand(index)}
          >
            <div className="flex-start flex items-center">
              <div className="-ms-[7px] -mt-[5px] me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary shadow-[0_0_8px_2px_rgba(86,156,214,0.4)] group-hover:scale-125 transition-transform"></div>
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
                  expandedIndex === index ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <p className="mb-4 mt-2 text-[#8dff8d] text-left terminal-text whitespace-pre-line">
                  {event.description}
                </p>
              </div>
              <div className="mt-2 text-sm text-[#8dff8d]/60">
                {expandedIndex === index ? '▲ Collapse' : '▼ Expand'}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
