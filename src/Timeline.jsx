import React, { useState, useEffect } from 'react';

const Timeline = () => {
  const events = [
    { date: '2018', title: 'Started Learning Programming', description: 'Began my journey into programming with basic languages.' },
    { date: '2019', title: 'First Project', description: 'Completed my first software project for a local business.' },
    { date: '2020', title: 'Internship at TechCorp', description: 'Worked as an intern, gaining hands-on experience in web development.' },
    { date: '2021', title: 'Full-Time Software Engineer', description: 'Started working full-time as a software engineer at Innovatech Solutions.' },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-scroll">
        <div className="timeline-line"></div>
        <div className="timeline-events">
          {events.map((event, index) => (
            <div 
              key={index}
              className="timeline-event"
              style={{ '--index': index }}
            >
              <div className="timeline-card">
                <div className="timeline-date">{event.date}</div>
                <div className="timeline-content">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
