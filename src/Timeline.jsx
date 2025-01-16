import React from 'react';

const Timeline = () => {
  const events = [
    { 
      date: '2018', 
      title: 'Started Learning Programming', 
      description: 'Began my journey into programming with basic languages.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
            </svg>
    },
    { 
      date: '2019', 
      title: 'First Project', 
      description: 'Completed my first software project for a local business.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l5.5-2.35a1 1 0 00.294-1.639L10.394 2.08z" />
              <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
    },
    { 
      date: '2020', 
      title: 'Internship at TechCorp', 
      description: 'Worked as an intern, gaining hands-on experience in web development.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
    },
    { 
      date: '2021', 
      title: 'Full-Time Software Engineer', 
      description: 'Started working full-time as a software engineer at Innovatech Solutions.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3a2 2 0 01-2 2h-1v3a2 2 0 01-2 2H7a2 2 0 01-2-2v-3H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-24">
      <ul className="timeline timeline-snap-icon timeline-vertical">
        {events.map((event, index) => (
          <li key={index}>
            <div className="timeline-middle">
              <div className="p-2 bg-primary rounded-full text-white">
                {event.icon}
              </div>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic text-primary">{event.date}</time>
              <div className="text-lg font-black">{event.title}</div>
              <div className="text-sm text-gray-600 mt-2">{event.description}</div>
            </div>
            {index < events.length - 1 && <hr className="bg-timeline-line" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
