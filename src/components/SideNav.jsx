import React, { useState } from 'react';
import {
  MenuIcon,
  ExperienceIcon,
  EducationIcon,
  SkillsIcon,
  LanguagesIcon,
  HobbiesIcon
} from './StreamlineIcons';

const navItems = [
  { id: 'experience', label: 'experience', Icon: ExperienceIcon },
  { id: 'education', label: 'education', Icon: EducationIcon },
  { id: 'skills', label: 'skills', Icon: SkillsIcon },
  { id: 'languages', label: 'spoken languages', Icon: LanguagesIcon },
  { id: 'hobbies', label: 'hobbies', Icon: HobbiesIcon },
];

const SideNav = ({ activeSection, onSelectSection }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);

  return (
    <>
      <div className={`nav-surface hidden sm:flex flex-col border-r border-[#3c3c3d] z-20 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-16' : 'w-56 md:w-64'
      }`}>
      <div className="nav-header h-12 flex items-center px-4 border-b border-[#3c3c3d] sm:flex-row flex-row space-x-2">
        <button 
          className="p-1 sm:p-2 bg-transparent rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <MenuIcon className={`text-[#8dff8d] transform transition-transform ${isCollapsed ? 'rotate-90' : 'rotate-0'}`} />
        </button>
        <span className={`text-sm text-[#8dff8d]/80 ml-2 ${isCollapsed ? 'hidden' : 'block'}`}>EXPLORER</span>
      </div>
      <div className="p-2 sm:block flex flex-row justify-start space-x-4 sm:space-x-0 overflow-y-auto flex-1">
        <button
          type="button"
          className={`nav-item text-[#9da4b0] text-sm mb-2 px-2 py-1 rounded text-left ${
            isCollapsed ? 'hidden' : 'block'
          }`}
          onClick={() => onSelectSection('home')}
        >
          JENNY_ZHEN_LIANG
        </button>
        <div className="text-sm font-mono">
          <button
            type="button"
            className={`nav-item flex w-full items-center py-1 rounded cursor-pointer transition-colors duration-200 ${
              activeSection === 'experience' ? 'nav-item-active text-white' : ''
            } ${isCollapsed ? 'justify-center px-0' : 'px-2'}`}
            onClick={() => {
              setIsExperienceExpanded((current) => !current);
              onSelectSection('experience');
            }}
          >
            <ExperienceIcon className={`w-5 h-5 ${isCollapsed ? '' : 'mr-4'}`} />
            {!isCollapsed && <span className="ml-3">experience</span>}
          </button>
          {isExperienceExpanded && !isCollapsed && (
            <div className="text-[#9da4b0]/70 text-xs pl-4">
              <div 
                className="nav-subitem pl-0 pr-2 py-1 rounded cursor-pointer flex items-center min-w-0"
                onClick={() => setIsExperienceExpanded(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1 text-[#9da4b0] flex-shrink-0">
                  <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                  <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                </svg>
                <span className="truncate">Sep 2025 - Jan 2026</span>
              </div>
              <div 
                className="nav-subitem pl-0 pr-2 py-1 rounded cursor-pointer flex items-center min-w-0"
                onClick={() => setIsExperienceExpanded(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1 text-[#9da4b0] flex-shrink-0">
                  <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z" clipRule="evenodd" />
                </svg>
                <span className="truncate">Mar 2020 - Aug 2025</span>
              </div>
              <div 
                className="nav-subitem pl-0 pr-2 py-1 rounded cursor-pointer flex items-center min-w-0"
                onClick={() => setIsExperienceExpanded(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1 text-[#9da4b0] flex-shrink-0">
                  <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z" clipRule="evenodd" />
                </svg>
                <span className="truncate">Jun 2018 - Mar 2020</span>
              </div>
            </div>
          )}
          {navItems.filter((item) => item.id !== 'experience').map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              className={`nav-item flex w-full items-center py-1 rounded cursor-pointer ${
                activeSection === id ? 'nav-item-active text-white' : ''
              } ${isCollapsed ? 'justify-center px-0' : 'px-2'}`}
              onClick={() => onSelectSection(id)}
            >
              <Icon className={`w-5 h-5 ${isCollapsed ? '' : 'mr-4'}`} />
              {!isCollapsed && <span className="ml-3">{label}</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default SideNav;
