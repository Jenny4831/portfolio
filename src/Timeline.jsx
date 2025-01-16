import React from 'react';

const Timeline = () => {
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
    },
    { 
      date: 'Nov 2017', 
      title: 'Education', 
      description: 'Bachelor of Science: Computer Science\n' +
        'University of Sydney, Sydney, NSW\n' +
        'Distinction units: Foundations of IT, Database Systems, Internet Software Platforms, Human-Computer Interaction',
    },
    { 
      date: 'Achievements', 
      title: 'Microsoft Research Asia Prize', 
      description: 'Awarded Microsoft Research Asia Prize for Junior Software Development Projects at USYD',
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-24 transform perspective-1000 rotate-x-1">
      <ol className="border-s-2 border-primary/50">
        {events.map((event, index) => (
          <li key={index}>
            <div className="flex-start flex items-center">
              <div className="-ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary shadow-[0_0_8px_2px_rgba(86,156,214,0.4)]"></div>
              <h4 className="-mt-2 text-xl font-semibold">{event.title}</h4>
            </div>
            <div className="mb-6 ms-6 pb-6 text-left">
              <a
                href="#!"
                className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 block text-left"
              >
                {event.date}
              </a>
              <p className="mb-4 mt-2 text-[#33ff33] text-left terminal-text">
                {event.description}
              </p>
              <button
                type="button"
                className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              >
                Read more
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
