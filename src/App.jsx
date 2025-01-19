import { motion } from 'framer-motion'
import Timeline from './Timeline.jsx'
import SideNav from './components/SideNav.jsx'
import HorizontalNavBar from './components/HorizontalNavBar.jsx'
import Socials from './components/socials.jsx'
import Summary from './components/Summary.jsx'
import SectionDivider from './components/SectionDivider.jsx'
import SectionTitle from './components/SectionTitle.jsx'
import Header from './components/Header.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'

function App() {
  return (
    <div>
      <HorizontalNavBar />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 lg:py-16 text-center min-h-screen sm:pl-20 md:pl-64 lg:pl-80 pb-32">
        <SideNav />
        <div className="code-bg"></div>
      <Header />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Socials/>
      </motion.div>

      <Summary />

      <div className="max-w-3xl mx-auto">
        <SectionDivider />
      <motion.section 
        id="experience" 
        className="scroll-mt-20 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle>Experience</SectionTitle>
        <div className="section-content">
          <Timeline />
        </div>
      </motion.section>
      
      </div>
      <Education />

      <Skills />
      <div className="max-w-3xl mx-auto">
        <SectionDivider />
        <motion.section 
          id="languages" 
          className="scroll-mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Spoken Languages</SectionTitle>
          <div className="section-content">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[#8dff8d]">
              <div className="p-4 border border-[#8dff8d]/20 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🇪🇸</span>
                  <h3 className="text-xl font-bold terminal-text"><span className="keyword">Spanish</span></h3>
                </div>
                <div className="text-sm text-[#8dff8d]/80">Native proficiency</div>
              </div>

              <div className="p-4 border border-[#8dff8d]/20 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🇨🇳</span>
                  <h3 className="text-xl font-bold terminal-text">
                    <span className="function">Chinese</span> (<span className="string">Cantonese</span>)
                  </h3>
                </div>
                <div className="text-sm text-[#8dff8d]/80">Native proficiency</div>
              </div>

              <div className="p-4 border border-[#8dff8d]/20 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🇨🇳</span>
                  <h3 className="text-xl font-bold terminal-text">
                    <span className="function">Chinese</span> (<span className="string">Mandarin</span>)
                  </h3>
                </div>
                <div className="text-sm text-[#8dff8d]/80">Professional proficiency</div>
              </div>

              <div className="p-4 border border-[#8dff8d]/20 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🇬🇧</span>
                  <h3 className="text-xl font-bold terminal-text"><span className="keyword">English</span></h3>
                </div>
                <div className="text-sm text-[#8dff8d]/80">Professional proficiency</div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      <div className="max-w-3xl mx-auto">
        <SectionDivider />
      <motion.section 
        id="hobbies" 
        className="scroll-mt-20 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle>Hobbies</SectionTitle>
        <div className="section-content">
          <div className="text-[#8dff8d]">
            <p><span className="function">Learning</span> <span className="string">Godot</span></p>
            <p><span className="keyword">Painting</span></p>
            <p><span className="keyword">Baking</span></p>
            <p><span className="function">Travelling</span></p>
          </div>
          </div>
      </motion.section>
    </div>

    </div>
    </div>
  )
}

export default App
