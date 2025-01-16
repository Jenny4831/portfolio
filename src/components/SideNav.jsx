import React from 'react';

const SideNav = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-[#252526] border-r border-[#3c3c3d] z-20 transform -translate-x-full md:translate-x-0 transition-transform duration-300">
      <button 
        className="md:hidden fixed top-4 left-4 p-2 bg-[#252526] rounded-lg z-30"
        onClick={() => document.querySelector('div[class*="SideNav"]').classList.toggle('translate-x-0')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8dff8d">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
      <div className="h-10 flex items-center px-4 border-b border-[#3c3c3d]">
        <span className="text-sm text-[#8dff8d]/80">EXPLORER</span>
      </div>
      <div className="p-2">
        <div className="text-[#8dff8d]/80 text-sm mb-2">NAIMEN_LIANG</div>
        <div className="text-[#8dff8d] text-sm font-mono">
          <div className="hover:bg-[#2a2d2e] px-2 py-1 rounded cursor-pointer">
            ├── 📄 resume.jsx
          </div>
          <div className="hover:bg-[#2a2d2e] px-2 py-1 rounded cursor-pointer">
            ├── 📁 experience
          </div>
          <div className="hover:bg-[#2a2d2e] px-2 py-1 rounded cursor-pointer">
            ├── 📁 education
          </div>
          <div className="hover:bg-[#2a2d2e] px-2 py-1 rounded cursor-pointer">
            └── 📁 skills
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
