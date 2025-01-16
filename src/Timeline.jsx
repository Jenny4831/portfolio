import React, { useState } from 'react';

const Timeline = () => {
  const events = [
    { date: '2018', title: 'Started Learning Programming', description: 'Began my journey into programming with basic languages.' },
    { date: '2019', title: 'First Project', description: 'Completed my first software project for a local business.' },
    { date: '2020', title: 'Internship at TechCorp', description: 'Worked as an intern, gaining hands-on experience in web development.' },
    { date: '2021', title: 'Full-Time Software Engineer', description: 'Started working full-time as a software engineer at Innovatech Solutions.' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div 
          key={index} 
          className={`timeline-event ${activeIndex === index ? 'active' : ''}`}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        >
          <h3>{event.date}</h3>
          <h4>{event.title}</h4>
          {activeIndex === index && <p>{event.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
