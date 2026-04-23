import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Timeline from './Timeline.jsx';
import SideNav from './components/SideNav.jsx';
import HorizontalNavBar from './components/HorizontalNavBar.jsx';
import Socials from './components/socials.jsx';
import Summary from './components/Summary.jsx';
import SectionDivider from './components/SectionDivider.jsx';
import SectionTitle from './components/SectionTitle.jsx';
import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Languages from './components/Languages.jsx';
import Hobbies from './components/Hobbies.jsx';

const sectionMeta = {
  experience: { label: 'experience.ts', component: Timeline, title: 'Experience' },
  education: { label: 'education.md', component: Education, title: 'Education' },
  skills: { label: 'skills.json', component: Skills, title: 'Skills' },
  languages: { label: 'languages.yml', component: Languages, title: 'Spoken Languages' },
  hobbies: { label: 'hobbies.txt', component: Hobbies, title: 'Hobbies' },
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const ActiveSectionComponent =
    activeSection === 'home' ? null : sectionMeta[activeSection].component;
  const isHome = activeSection === 'home';

  return (
    <div className="app-shell">
      <HorizontalNavBar activeSection={activeSection} onSelectSection={setActiveSection} />
      <div className="editor-window max-w-7xl mx-auto my-0 md:my-6">
        <div className="editor-titlebar">
          <div className="window-controls">
            <span className="window-dot bg-[#ff5f57]"></span>
            <span className="window-dot bg-[#febc2e]"></span>
            <span className="window-dot bg-[#28c840]"></span>
          </div>
          <div className="editor-tabs">
            <button
              type="button"
              className={`editor-tab ${isHome ? 'editor-tab-active' : ''}`}
              onClick={() => setActiveSection('home')}
            >
              portfolio.tsx
            </button>
            {!isHome && (
              <span className="editor-tab editor-tab-active hidden md:inline-flex">
                {sectionMeta[activeSection].label}
              </span>
            )}
          </div>
          <div className="editor-status hidden md:block">VS Code Theme: Night Shift</div>
        </div>

        <div className={`editor-body w-full scroll-smooth sm:grid sm:grid-cols-[14rem_minmax(0,1fr)] md:grid-cols-[16rem_minmax(0,1fr)] ${isHome ? 'home-active' : ''}`}>
          <SideNav activeSection={activeSection} onSelectSection={setActiveSection} />
          <div className="code-bg"></div>
          <div className="editor-main">
          <div className="editor-content text-center px-4 md:px-8 py-8 md:py-12 lg:py-16">
            <AnimatePresence mode="wait">
              {isHome ? (
                <motion.div
                  key="home"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="space-y-8"
                >
                  <Header />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <Socials />
                  </motion.div>
                  <Summary />
                </motion.div>
              ) : (
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="max-w-3xl mx-auto w-full"
                >
                  <SectionDivider />
                  {activeSection === 'experience' ? (
                    <motion.section
                      className="max-w-3xl mx-auto section-panel"
                      initial={false}
                    >
                      <SectionTitle>{sectionMeta[activeSection].title}</SectionTitle>
                      <div className="section-content">
                        <ActiveSectionComponent />
                      </div>
                    </motion.section>
                  ) : (
                    <ActiveSectionComponent />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          </div>
        </div>

        <div className="editor-footer">
          <div className="editor-footer-left">
            <span className="editor-footer-badge">Open to work</span>
            <span className="hidden md:inline">portfolio</span>
          </div>
          <div className="editor-footer-right">
            <span className="hidden md:inline">UTF-8</span>
            <span className="hidden md:inline editor-footer-separator"></span>
            <span>Go / TypeScript</span>
            <span className="hidden md:inline editor-footer-separator"></span>
            <span className="hidden md:inline">Ln 1, Col 1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
