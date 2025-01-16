import React, { useState, useEffect } from 'react';

const Timeline = () => {
  const events = [
    { date: '2018', title: 'Started Learning Programming', description: 'Began my journey into programming with basic languages.' },
    { date: '2019', title: 'First Project', description: 'Completed my first software project for a local business.' },
    { date: '2020', title: 'Internship at TechCorp', description: 'Worked as an intern, gaining hands-on experience in web development.' },
    { date: '2021', title: 'Full-Time Software Engineer', description: 'Started working full-time as a software engineer at Innovatech Solutions.' },
  ];

  return (
    <div className="w-full overflow-hidden my-24 py-8">
      <div className="relative w-full min-h-[400px]">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary -translate-y-1/2 z-10"></div>
        <div className="flex gap-16 px-16 overflow-x-auto scroll-snap-x pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {events.map((event, index) => (
            <div
              key={index}
              className="scroll-snap-center relative min-w-[300px] w-[300px] pt-16 transition-transform duration-300"
            >
              <div className="relative bg-background-light rounded-xl p-8 shadow-custom transition-all duration-300 origin-top">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-background-light px-4 py-2 rounded-full font-semibold whitespace-nowrap">
                  {event.date}
                </div>
                <div className="text-center">
                  <h3 className="text-primary text-xl mb-4">{event.title}</h3>
                  <p className="text-[#2A1E17] leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-[200px] group-hover:mt-4">
                    {event.description}
                  </p>
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
