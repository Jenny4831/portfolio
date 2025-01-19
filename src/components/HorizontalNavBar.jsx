import React, { useState, useEffect } from 'react';
import {
  MenuIcon,
  ExperienceIcon,
  EducationIcon,
  SkillsIcon,
  LanguagesIcon,
  HobbiesIcon
} from './StreamlineIcons';

const HorizontalNavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Clear any existing timeout
      clearTimeout(timeoutId);
      
      // If scrolling down, hide the navbar
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } 
      // If scrolling up, show the navbar
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      // Set a timeout to show the navbar when scrolling stops
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 300); // 300ms delay after scrolling stops
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed top-0 left-0 w-full bg-[#252526] border-b border-[#3c3c3d] z-20 sm:hidden transition-all duration-300 ${
      isCollapsed ? 'h-14' : 'h-auto'
    } ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="flex flex-row justify-between items-center p-2 px-4">
        <button 
          className="p-1 sm:p-2 bg-transparent rounded-lg hover:bg-[#2a2d2e] transition-colors"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <MenuIcon className={`text-[#8dff8d] transform transition-transform ${isCollapsed ? 'rotate-90' : 'rotate-0'}`} />
        </button>
        <div className={`flex flex-row justify-around items-end space-x-4 transition-all duration-300 ${
          isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>
          <a href="#experience" className="p-2 hover:bg-[#2a2d2e] rounded transition-colors">
            <ExperienceIcon className="w-5 h-5 text-[#8dff8d]" />
          </a>
          <a href="#education" className="p-2 hover:bg-[#2a2d2e] rounded transition-colors">
            <EducationIcon className="w-5 h-5 text-[#8dff8d]" />
          </a>
          <a href="#skills" className="p-2 hover:bg-[#2a2d2e] rounded transition-colors">
            <SkillsIcon className="w-5 h-5 text-[#8dff8d]" />
          </a>
          <a href="#languages" className="p-2 hover:bg-[#2a2d2e] rounded transition-colors">
            <LanguagesIcon className="w-5 h-5 text-[#8dff8d]" />
          </a>
          <a href="#hobbies" className="p-2 hover:bg-[#2a2d2e] rounded transition-colors">
            <HobbiesIcon className="w-5 h-5 text-[#8dff8d]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HorizontalNavBar;
