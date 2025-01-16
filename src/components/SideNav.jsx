import React from 'react';

const SideNav = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-[#252526] border-r border-[#3c3c3d] z-20">
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
