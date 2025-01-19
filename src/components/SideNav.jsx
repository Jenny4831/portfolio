import React, { useState } from 'react';

const SideNav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);

  return (
    <>
      <div className={`fixed left-0 top-0 h-screen bg-[#252526] border-r border-[#3c3c3d] z-20 transition-all duration-300 ${
        isCollapsed ? 'w-12 sm:w-16' : 'w-56 sm:w-64'
      }`}>
      <div className="h-10 flex items-center px-4 border-b border-[#3c3c3d]">
        <button 
          className="p-1 sm:p-2 bg-transparent rounded-lg hover:bg-[#2a2d2e] transition-colors"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#8dff8d"
            strokeWidth="2.5"
            className={`transform transition-transform ${isCollapsed ? 'rotate-90' : 'rotate-0'}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <span className={`text-sm text-[#8dff8d]/80 ml-2 ${isCollapsed ? 'hidden' : 'block'}`}>EXPLORER</span>
      </div>
      <div className="p-2">
        <div className={`text-[#8dff8d]/80 text-sm mb-2 px-2 ${isCollapsed ? 'hidden' : 'block'}`}>NAIMEN_LIANG</div>
        <div className="text-[#8dff8d] text-sm font-mono">
          <div 
            className="flex items-center hover:bg-[#2a2d2e] px-2 py-1 rounded cursor-pointer"
            onClick={() => setIsExperienceExpanded(!isExperienceExpanded)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.225a4.85 4.85 0 00-1.647 1.056c-.34.27-.58.62-.726 1.018a.75.75 0 01-1.072.105A12 12 0 012.25 12.76zm14.457-1.99c.011-.01.023-.01.034-.02a.75.75 0 01.757.757c.012.011.023.023.034.034a12 12 0 01-3.424 6.156c-.27.34-.62.58-1.018.726a4.85 4.85 0 001.056-1.647c.231-1.584 1.625-2.707 3.225-2.707zm-1.5-1.5c.011-.01.023-.01.034-.02a.75.75 0 01.757.757c.012.011.023.023.034.034a12 12 0 01-3.424 6.156c-.27.34-.62.58-1.018.726a4.85 4.85 0 001.056-1.647c.231-1.584 1.625-2.707 3.225-2.707zM3.696 9.71a4.836 4.836 0 00-1.647-1.056c-.34-.27-.58-.62-.726-1.018a.75.75 0 01-1.072-.105A12 12 0 013.696 9.71zm15.353 1.29c.011-.01.023-.01.034-.02a.75.75 0 01.757.757c.012.011.023.023.034.034a12 12 0 01-3.424 6.156c-.27.34-.62.58-1.018.726a4.85 4.85 0 001.056-1.647c.231-1.584 1.625-2.707 3.225-2.707z" />
            </svg>
            {isCollapsed ? 'experience' : 'experience'}
          </div>
          {isExperienceExpanded && (
            <div className="ml-4 text-[#8dff8d]/60 text-xs">
              <div 
                className="hover:bg-[#2a2d2e] px-2 py-1 rounded cursor-pointer"
                onClick={() => {
                  setIsExperienceExpanded(true);
                  const element = document.getElementById('timeline-0');
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >Mar 2020 - Present</div>
              <div 
                className="hover:bg-[#2a2d2e] px-2 py-1 rounded cursor-pointer"
                onClick={() => {
                  setIsExperienceExpanded(true);
                  const element = document.getElementById('timeline-1');
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >Jun 2018 - Mar 2020</div>
            </div>
          )}
          <div className="flex items-center hover:bg-[#2a2d2e] px-2 py-1 rounded cursor-pointer" onClick={() => {
            const element = document.getElementById('education');
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042a8.967 8.967 0 00-7.633 4.5c-1.58 3.017-1.58 6.787 0 9.804 1.58 3.017 4.407 4.5 7.633 4.5 3.226 0 6.053-1.483 7.633-4.5 1.58-3.017 1.58-6.787 0-9.804A8.967 8.967 0 0012 6.042z" />
            </svg>
            {isCollapsed ? 'education' : 'education'}
          </div>
           <div className="flex items-center hover:bg-[#2a2d2e] px-2 py-1 rounded cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h10.5A2.25 2.25 0 0021 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0v3m-3 1.5a.375.375 0 11.75 0 .375.375 0 01-.75 0zm3 0v3m3-3a.375.375 0 11.75 0 .375.375 0 01-.75 0z" />
            </svg>
            {isCollapsed ? 'skills' : 'skills'}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SideNav;
