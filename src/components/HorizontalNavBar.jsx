import React from 'react';
import {
  ExperienceIcon,
  EducationIcon,
  SkillsIcon,
  LanguagesIcon,
  HobbiesIcon
} from './StreamlineIcons';

const HorizontalNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#252526] border-t border-[#3c3c3d] z-20 sm:hidden">
      <div className="flex flex-row justify-around items-end p-2 space-x-4">
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
  );
};

export default HorizontalNavBar;
