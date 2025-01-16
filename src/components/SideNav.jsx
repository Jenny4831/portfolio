import React, { useState } from 'react';

const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <div className={`fixed left-0 top-0 h-screen bg-[#252526] border-r border-[#3c3c3d] z-20 transition-all duration-300 ${
        isCollapsed ? 'w-12 sm:w-16' : 'w-56 sm:w-64'
      }`}>
      <div className="h-10 flex items-center px-4 border-b border-[#3c3c3d]">
        <button 
          className="p-2 bg-transparent rounded-lg hover:bg-[#2a2d2e] transition-colors"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#8dff8d"
            className={`transform transition-transform ${isCollapsed ? 'rotate-90' : 'rotate-0'}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <span className={`text-sm text-[#8dff8d]/80 ml-2 ${isCollapsed ? 'hidden' : 'block'}`}>EXPLORER</span>
      </div>
      <div className="p-2">
        <div className={`text-[#8dff8d]/80 text-sm mb-2 ${isCollapsed ? 'hidden' : 'block'}`}>NAIMEN_LIANG</div>
        <div className="text-[#8dff8d] text-sm font-mono">
          <div className="hover:bg-[#2a2d2e] px-2 py-1 rounded cursor-pointer">
            {isCollapsed ? '📄' : '├── 📄 resume.jsx'}
          </div>
          <div className="hover:bg-[#2a2d2e] px-2 py-1 rounded cursor-pointer">
            {isCollapsed ? '📁' : '├── 📁 experience'}
          </div>
          <div className="hover:bg-[#2a2d2e] px-2 py-1 rounded cursor-pointer">
            {isCollapsed ? '📁' : '├── 📁 education'}
          </div>
          <div className="hover:bg-[#2a2d2e] px-2 py-1 rounded cursor-pointer">
            {isCollapsed ? '📁' : '└── 📁 skills'}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SideNav;
