import React, { useState, useEffect } from 'react';

const Timeline = () => {
  const events = [
    { date: '2018', title: 'Started Learning Programming', description: 'Began my journey into programming with basic languages.' },
    { date: '2019', title: 'First Project', description: 'Completed my first software project for a local business.' },
    { date: '2020', title: 'Internship at TechCorp', description: 'Worked as an intern, gaining hands-on experience in web development.' },
    { date: '2021', title: 'Full-Time Software Engineer', description: 'Started working full-time as a software engineer at Innovatech Solutions.' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleEvents, setVisibleEvents] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleEvents(prev => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const eventElements = document.querySelectorAll('.timeline-event');
    eventElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div 
          key={index}
          data-index={index}
          className={`timeline-event ${activeIndex === index ? 'active' : ''} ${
            visibleEvents.includes(index.toString()) ? 'visible' : ''
          }`}
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        >
          <div className="timeline-content">
            <h3>{event.date}</h3>
            <h4>{event.title}</h4>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
