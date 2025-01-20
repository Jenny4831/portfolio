import React, { useState } from 'react';

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const events = [
    {
      company: 'SafetyCulture',
      date: 'Mar 2020 - Present',
      title: 'Senior Software Engineer - Billing Systems, Tech Lead',
      description:
        '- <span class="keyword">Led</span> the enhancement of the billing system to support enterprise customers.<br /><br />' +
        '- <span class="keyword">Designed</span> and <span class="keyword">developed</span> the core architecture for the company\'s internal tooling platform that equips customer support and GTM teams with essential tools to manage customer inquiries and execute operations on customer\'s account.<br /><br />' +
        '- <span class="keyword">Implemented</span> and optimized sales order process with Salesforce synchronization, boosting sales team efficiency and productivity.<br /><br />' +
        '- <span class="keyword">Took</span> a key role in managing the backend community, promoting a culture of knowledge sharing through engineers\' expertise and developing comprehensive, hands-on workshops to elevate skills across diverse topics.<br /><br />' +
        '- <span class="keyword">Actively</span> involved in guiding interns, participating in mentorship, and representing the company at university career fairs and various activities.<br /><br />' +
        '- <span class="keyword">Led</span> the seamless migration of legacy users, enabling the rollout of new features across various domains and the retirement of outdated plans.<br /><br />' +
        '- <span class="keyword">Implemented</span> data retention strategies to ensure compliance with GDPR regulations. Worked closely with data store team, to be able to set up ground work, such that other teams can follow an example.',
    },
    {
      company: 'Snug',
      date: 'Jun 2018 - Mar 2020',
      title: 'Full Stack Software Engineer',
      description: 
        '- <span class="keyword">Delivered</span> an average of three major full-stack features per month in 2018-2019.<br /><br />' +
        '- <span class="keyword">Collaborated</span> with software development and testing teams to design and develop scalable and high-performance leasing solutions that met client functionality requirements.<br /><br />' +
        '- <span class="keyword">Tested</span> and troubleshot methods, devised innovative solutions, and documented resolutions, contributing to the knowledge base for the support team.<br /><br />' +
        '- <span class="keyword">Analytics</span> dashboard: Designed and implemented an analytics dashboard for leasing agencies, enabling performance tracking and insights end-to-end.<br /><br />' +
        '- <span class="keyword">Appointment</span> Scheduling Feature: Led full-stack development of a property leasing appointment scheduling system.<br /><br />' +
        '- <span class="keyword">Activity</span> Report: Developed full-stack a feature to export agent activity reports for leasing agencies, improving transparency and operational visibility.',
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
              <div className="-ms-2 me-3 flex h-3 w-3 items-center justify-center rounded-full bg-primary group-hover:scale-125 transition-transform"></div>
              <h4 className="text-lg sm:text-xl font-semibold text-primary group-hover:text-[#8dff8d] transition-colors">
                {event.company} - {event.date}
              </h4>
            </div>
            <div className={`mb-6 ms-6 pb-6 text-left transition-all duration-300 ${expandedIndex === index ? 'opacity-100' : 'opacity-80'}`}>
              <h5 className="text-base sm:text-lg font-medium text-[#8dff8d] mb-3 terminal-text group-hover:underline">
                {event.title}
              </h5>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedIndex === index ? 'max-h-[500px] overflow-y-auto' : 'max-h-0'
                }`}
              >
                <p className="mb-4 mt-2 text-[#8dff8d] text-left terminal-text leading-relaxed" dangerouslySetInnerHTML={{ __html: event.description }} />
              </div>
              <div className="mt-3 text-sm text-[#8dff8d]/60">
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
