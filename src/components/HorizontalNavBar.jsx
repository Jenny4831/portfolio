import React, { useState } from 'react';
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

  return (
    <div className={`fixed bottom-0 left-0 w-full bg-[#252526] border-t border-[#3c3c3d] z-20 sm:hidden transition-all duration-300 ${
      isCollapsed ? 'h-14' : 'h-auto'
    }`}>
      <div className="flex flex-row justify-around items-end p-2 space-x-4">
        <button 
          className="p-2 hover:bg-[#2a2d2e] rounded transition-colors"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <MenuIcon className={`w-5 h-5 text-[#8dff8d] transform transition-transform ${isCollapsed ? 'rotate-90' : 'rotate-0'}`} />
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
