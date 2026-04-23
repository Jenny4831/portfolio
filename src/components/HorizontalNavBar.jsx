import React, { useState, useEffect } from 'react';
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

const HorizontalNavBar = ({ activeSection, onSelectSection }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);

  return (
    <div className={`nav-surface fixed bottom-0 left-0 w-full max-w-[100vw] border-t border-[#3c3c3d] z-[1000] sm:hidden transition-all duration-300 ease-in-out ${
      isCollapsed ? 'h-14' : 'h-auto'
    }`}>
      <div className="flex flex-row justify-between items-center p-2 px-4 h-14">
        <button 
          className="p-2 bg-transparent rounded-lg hover:bg-white/5 transition-colors flex-shrink-0"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <MenuIcon className={`text-[#8dff8d] w-5 h-5 transform transition-transform ${isCollapsed ? 'rotate-90' : 'rotate-0'}`} />
        </button>
        <div className="flex-1 flex justify-end overflow-x-auto scrollbar-hide pl-2">
          <div className="flex space-x-3 text-[#9da4b0]">
            {navItems.map(({ id, Icon }) => (
              <button
                key={id}
                type="button"
                className={`nav-item p-1.5 rounded flex-shrink-0 ${
                  activeSection === id ? 'nav-item-active' : ''
                }`}
                onClick={() => onSelectSection(id)}
              >
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {!isCollapsed && (
        <div className="nav-header p-2 border-t border-[#3c3c3d]">
          <button
            type="button"
            className="nav-item text-[#9da4b0] text-sm mb-2 px-2 py-1 rounded text-left w-full"
            onClick={() => onSelectSection('home')}
          >
            JENNY_ZHEN_LIANG
          </button>
          <div className="text-sm font-mono">
            <button
              type="button"
              className={`nav-item flex w-full items-center py-1 px-2 rounded cursor-pointer ${
                activeSection === 'experience' ? 'nav-item-active text-white' : ''
              }`}
              onClick={() => {
                setIsExperienceExpanded(!isExperienceExpanded);
                onSelectSection('experience');
              }}
            >
              <ExperienceIcon className="w-4 h-4 mr-4" />
              <span className="ml-2">experience</span>
            </button>
            {isExperienceExpanded && (
              <div className="text-[#9da4b0]/70 text-xs pl-4">
                <div className="nav-subitem pl-0 pr-2 py-1 rounded cursor-pointer flex items-center min-w-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1 text-[#9da4b0] flex-shrink-0">
                    <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                    <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                  </svg>
                  <span className="truncate">Mar 2020 - Present</span>
                </div>
                <div className="nav-subitem pl-0 pr-2 py-1 rounded cursor-pointer flex items-center min-w-0">
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
                className={`nav-item flex w-full items-center py-1 px-2 rounded cursor-pointer ${
                  activeSection === id ? 'nav-item-active text-white' : ''
                }`}
                onClick={() => onSelectSection(id)}
              >
                <Icon className="w-4 h-4 mr-4" />
                <span className="ml-2">{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HorizontalNavBar;
