import React, { useState } from 'react';

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const events = [
    {
      date: 'Mar 2020 - Present',
      title: 'Senior Software Engineer - Billing Systems, Tech Lead',
      description: 'SafetyCulture, Sydney, NSW\n' +
        '- Led the enhancement of the billing system to support enterprise customers: collaborated with finance team on requirements, selected billing providers, designed system architecture with migration plan, and managed cross-functional implementation while maintaining regular stakeholder updates. Successfully unlocked enterprise contracts and custom billing models.\n' +
        '- Designed and developed the core architecture for the company\'s internal tooling platform that equips customer support and GTM teams with essential tools to manage customer inquiries and execute operations on customer\'s account. Built with scalability in mind, the platform allows domain teams to extend functionality with custom tooling, boosting support for customer-facing teams. This initiative reduced reliance on scripts, enhanced traceability of actions taken against customer accounts, and introduced granular permission controls for features provided by different teams, ultimately increasing security, visibility, and reliability.\n' +
        '- Implemented and optimized sales order process with Salesforce synchronization, boosting sales team efficiency and productivity.\n' +
        '- Designed and built a real-time, event-based customer activity logging system. The system features a flexible architecture that integrates seamlessly with both legacy and modern services, enabling simple adoption by different teams. Customers can now monitor their users\' activities in real-time, improving transparency and accountability.\n' +
        '- Took a key role in managing the backend community, promoting a culture of knowledge sharing through engineers\' expertise and developing comprehensive, hands-on workshops to elevate skills across diverse topics.\n' +
        '- Actively involved in guiding interns, participating in mentorship, and representing the company at university career fairs and various activities.\n' +
        '- Led the seamless migration of legacy users, enabling the rollout of new features across various domains and the retirement of outdated plans. Collaborated closely with product, marketing, and support teams to ensure effective communication with customers and smooth execution of each rollout stage. This migration enhanced product accessibility for legacy users, resulting in a 10% increase in trial conversions.\n' +
        '- Implemented data retention strategies to ensure compliance with GDPR regulations. Worked closely with data store team, to be able to set up ground work, such that other teams can follow an example.',
    },
    {
      date: 'Jun 2018 - Mar 2020',
      title: 'Full Stack Software Engineer',
      description: 'Snug, Sydney\n' +
        '- Delivered an average of three major full-stack features per month in 2018-2019.\n' +
        '- Collaborated with software development and testing teams to design and develop scalable and high-performance leasing solutions that met client functionality requirements.\n' +
        '- Tested and troubleshot methods, devised innovative solutions, and documented resolutions, contributing to the knowledge base for the support team.\n' +
        '- Analytics dashboard: Designed and implemented an analytics dashboard for leasing agencies, enabling performance tracking and insights end-to-end.\n' +
        '- Appointment Scheduling Feature: Led full-stack development of a property leasing appointment scheduling system.\n' +
        '- Activity Report: Developed full-stack a feature to export agent activity reports for leasing agencies, improving transparency and operational visibility.',
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8 sm:my-12 md:my-16 lg:my-24 transform perspective-1000 rotate-x-0 md:rotate-x-1">
      <ol className="border-l-2 relative left-1/2 transform -translate-x-1/2">
        {events.map((event, index) => (
          <li 
            key={index}
            className="group relative cursor-pointer transition-all duration-300 hover:bg-[#252526]/50 rounded-lg p-2"
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
