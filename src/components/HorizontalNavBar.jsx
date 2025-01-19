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
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);

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
        <div className="flex space-x-4">
          <a href="#experience" className="p-1 hover:bg-[#2a2d2e] rounded">
            <ExperienceIcon className="w-4 h-4 text-[#8dff8d]" />
          </a>
          <a href="#education" className="p-1 hover:bg-[#2a2d2e] rounded">
            <EducationIcon className="w-4 h-4 text-[#8dff8d]" />
          </a>
          <a href="#skills" className="p-1 hover:bg-[#2a2d2e] rounded">
            <SkillsIcon className="w-4 h-4 text-[#8dff8d]" />
          </a>
          <a href="#languages" className="p-1 hover:bg-[#2a2d2e] rounded">
            <LanguagesIcon className="w-4 h-4 text-[#8dff8d]" />
          </a>
          <a href="#hobbies" className="p-1 hover:bg-[#2a2d2e] rounded">
            <HobbiesIcon className="w-4 h-4 text-[#8dff8d]" />
          </a>
        </div>
      </div>
      
      {!isCollapsed && (
        <div className="p-2 border-t border-[#3c3c3d]">
          <div className="text-[#8dff8d]/80 text-sm mb-2 px-2">JENNY_ZHEN_LIANG</div>
          <div className="text-[#8dff8d] text-sm font-mono">
            <a 
              href="#experience"
              className="flex items-center hover:bg-[#2a2d2e] py-1 px-2 rounded cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setIsExperienceExpanded(!isExperienceExpanded);
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ExperienceIcon className="w-3 h-3 text-[#8dff8d] mr-4" />
              <span>experience</span>
            </a>
            {isExperienceExpanded && (
              <div className="text-[#8dff8d]/60 text-xs pl-4">
                <div className="hover:bg-[#2a2d2e] pl-0 pr-2 py-1 rounded cursor-pointer flex items-center min-w-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1 text-[#8dff8d] flex-shrink-0">
                    <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                    <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                  </svg>
                  <span className="truncate">Mar 2020 - Present</span>
                </div>
                <div className="hover:bg-[#2a2d2e] pl-0 pr-2 py-1 rounded cursor-pointer flex items-center min-w-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1 text-[#8dff8d] flex-shrink-0">
                    <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z" clipRule="evenodd" />
                  </svg>
                  <span className="truncate">Jun 2018 - Mar 2020</span>
                </div>
              </div>
            )}
            <a href="#education" className="flex items-center hover:bg-[#2a2d2e] py-1 px-2 rounded cursor-pointer">
              <EducationIcon className="w-3 h-3 text-[#8dff8d] mr-4" />
              <span>education</span>
            </a>
            <a href="#skills" className="flex items-center hover:bg-[#2a2d2e] py-1 px-2 rounded cursor-pointer">
              <SkillsIcon className="w-3 h-3 text-[#8dff8d] mr-4" />
              <span>skills</span>
            </a>
            <a href="#languages" className="flex items-center hover:bg-[#2a2d2e] py-1 px-2 rounded cursor-pointer">
              <LanguagesIcon className="w-3 h-3 text-[#8dff8d] mr-4" />
              <span>spoken languages</span>
            </a>
            <a href="#hobbies" className="flex items-center hover:bg-[#2a2d2e] py-1 px-2 rounded cursor-pointer">
              <HobbiesIcon className="w-3 h-3 text-[#8dff8d] mr-4" />
              <span>hobbies</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HorizontalNavBar;
