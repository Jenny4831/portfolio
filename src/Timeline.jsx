import React, { useState } from 'react';

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const events = [
    { date: '2018', title: 'Started Learning Programming', description: 'Began my journey into programming with basic languages.' },
    { date: '2019', title: 'First Project', description: 'Completed my first software project for a local business.' },
    { date: '2020', title: 'Internship at TechCorp', description: 'Worked as an intern, gaining hands-on experience in web development.' },
    { date: '2021', title: 'Full-Time Software Engineer', description: 'Started working full-time as a software engineer at Innovatech Solutions.' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-24">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 w-1 h-full bg-primary -translate-x-1/2"></div>
        
        {events.map((event, index) => (
          <div
            key={index}
            className={`relative pl-16 pr-8 mb-12 cursor-pointer transition-all duration-300 ${
              index === activeIndex ? 'scale-105' : 'scale-100 opacity-80'
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {/* Circle marker */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background-light z-10"></div>
            
            {/* Content */}
            <div className="relative bg-background-light rounded-xl p-8 shadow-custom">
              <div className="absolute -left-16 top-0 bg-primary text-background-light px-4 py-2 rounded-full font-semibold">
                {event.date}
              </div>
              <div className="text-left">
                <h3 className="text-primary text-2xl font-bold mb-4">{event.title}</h3>
                <p className={`text-[#2A1E17] leading-relaxed transition-all duration-300 ${
                  index === activeIndex ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
