import React, { useState } from 'react';
import {
  MenuIcon,
  ExperienceIcon,
  EducationIcon,
  SkillsIcon,
  LanguagesIcon,
  HobbiesIcon
} from './StreamlineIcons';

const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);

  return (
    <>
      <div className={`hidden sm:block fixed top-0 left-0 w-full sm:left-0 sm:top-0 sm:h-screen bg-[#252526]/95 backdrop-blur-sm border-[#3c3c3d] z-20 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'h-0 sm:w-16' : 'h-auto sm:w-56 md:w-64'
      } border-b sm:border-r`}>
      <div className="h-10 flex items-center px-4 border-b border-[#3c3c3d] sm:flex-row flex-row space-x-2">
        <button 
          className="p-1 sm:p-2 bg-transparent rounded-lg hover:bg-[#2a2d2e] transition-colors"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <MenuIcon className={`text-[#8dff8d] transform transition-transform ${isCollapsed ? 'rotate-90' : 'rotate-0'}`} />
        </button>
        <span className={`text-sm text-[#8dff8d]/80 ml-2 ${isCollapsed ? 'hidden' : 'block'}`}>EXPLORER</span>
      </div>
      <div className="p-2 sm:block flex flex-row justify-start space-x-4 sm:space-x-0">
        <div className={`text-[#8dff8d]/80 text-sm mb-2 px-2 ${isCollapsed ? 'hidden' : 'block'}`}>JENNY_ZHEN_LIANG</div>
        <div className="text-[#8dff8d] text-sm font-mono">
          <a 
            href="#experience"
            className={`flex items-center hover:bg-[#2a2d2e] py-1 rounded cursor-pointer transition-colors duration-200 ${
              isCollapsed ? 'justify-center px-0' : 'px-2'
            }`}
            onClick={(e) => {
              e.preventDefault();
              setIsExperienceExpanded(!isExperienceExpanded);
              document.getElementById('experience')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            <ExperienceIcon className={`w-5 h-5 text-[#8dff8d] ${isCollapsed ? '' : 'mr-4'}`} />
            {!isCollapsed && <span className="ml-3">experience</span>}
          </a>
          {isExperienceExpanded && !isCollapsed && (
            <div className="text-[#8dff8d]/60 text-xs pl-4">
              <div 
                className="hover:bg-[#2a2d2e] pl-0 pr-2 py-1 rounded cursor-pointer flex items-center min-w-0"
                onClick={() => setIsExperienceExpanded(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1 text-[#8dff8d] flex-shrink-0">
                  <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                  <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                </svg>
                <span className="truncate">Mar 2020 - Present</span>
              </div>
              <div 
                className="hover:bg-[#2a2d2e] pl-0 pr-2 py-1 rounded cursor-pointer flex items-center min-w-0"
                onClick={() => setIsExperienceExpanded(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1 text-[#8dff8d] flex-shrink-0">
                  <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z" clipRule="evenodd" />
                </svg>
                <span className="truncate">Jun 2018 - Mar 2020</span>
              </div>
            </div>
          )}
          <a 
            href="#education"
            className={`flex items-center hover:bg-[#2a2d2e] py-1 rounded cursor-pointer ${
              isCollapsed ? 'justify-center px-0' : 'px-2'
            }`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <EducationIcon className={`w-5 h-5 text-[#8dff8d] ${isCollapsed ? '' : 'mr-4'}`} />
            {!isCollapsed && <span className="ml-3">education</span>}
          </a>
          <a 
            href="#skills"
            className={`flex items-center hover:bg-[#2a2d2e] py-1 rounded cursor-pointer ${
              isCollapsed ? 'justify-center px-0' : 'px-2'
            }`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <SkillsIcon className={`w-5 h-5 text-[#8dff8d] ${isCollapsed ? '' : 'mr-4'}`} />
            {!isCollapsed && <span className="ml-3">skills</span>}
          </a>
          <a 
            href="#languages"
            className={`flex items-center hover:bg-[#2a2d2e] py-1 rounded cursor-pointer ${
              isCollapsed ? 'justify-center px-0' : 'px-2'
            }`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('languages')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <LanguagesIcon className={`w-5 h-5 text-[#8dff8d] ${isCollapsed ? '' : 'mr-4'}`} />
            {!isCollapsed && <span className="ml-3">spoken languages</span>}
          </a>
          <a 
            href="#hobbies"
            className={`flex items-center hover:bg-[#2a2d2e] py-1 rounded cursor-pointer ${
              isCollapsed ? 'justify-center px-0' : 'px-2'
            }`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('hobbies')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <HobbiesIcon className={`w-5 h-5 text-[#8dff8d] ${isCollapsed ? '' : 'mr-4'}`} />
            {!isCollapsed && <span className="ml-3">hobbies</span>}
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default SideNav;
