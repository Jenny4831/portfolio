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
import Languages from './components/Languages.jsx'

function App() {
  return (
    <div>
      <HorizontalNavBar />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 lg:py-16 text-center min-h-screen sm:pl-20 md:pl-64 lg:pl-80 pb-32 space-y-12">
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

      <div className="max-w-3xl mx-auto space-y-12">
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

      <div className="max-w-3xl mx-auto space-y-12">
        <Skills />
        <Languages />
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
          <motion.div 
            className="text-[#8dff8d] grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div 
              className="hobby-card bg-[#0d1117] p-4 rounded-lg border border-[#8dff8d]/20 hover:border-[#8dff8d] transition-all duration-300 hover:shadow-[0_0_15px_rgba(141,255,141,0.3)]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl mt-1">🎮</span>
                <div className="text-left">
                  <p className="text-xl font-code"><span className="function">Learning</span> <span className="string">Godot</span></p>
                  <p className="text-sm text-[#8dff8d]/80">Creating a 2D pixel game</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="hobby-card bg-[#0d1117] p-4 rounded-lg border border-[#8dff8d]/20 hover:border-[#8dff8d] transition-all duration-300 hover:shadow-[0_0_15px_rgba(141,255,141,0.3)]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl mt-1">🎨</span>
                <div className="text-left">
                  <p className="text-xl font-code"><span className="keyword">Painting</span></p>
                  <p className="text-sm text-[#8dff8d]/80">Trying all kinds of medium</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="hobby-card bg-[#0d1117] p-4 rounded-lg border border-[#8dff8d]/20 hover:border-[#8dff8d] transition-all duration-300 hover:shadow-[0_0_15px_rgba(141,255,141,0.3)]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl mt-1">🍰</span>
                <div className="text-left">
                  <p className="text-xl font-code"><span className="keyword">Baking</span></p>
                  <p className="text-sm text-[#8dff8d]/80">Making the same cake in different shapes</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="hobby-card bg-[#0d1117] p-4 rounded-lg border border-[#8dff8d]/20 hover:border-[#8dff8d] transition-all duration-300 hover:shadow-[0_0_15px_rgba(141,255,141,0.3)]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl mt-1">✈️</span>
                <div className="text-left">
                  <p className="text-xl font-code"><span className="function">Travelling</span></p>
                  <p className="text-sm text-[#8dff8d]/80">Good views, good food and good fun</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>

    </div>
    </div>
  )
}

export default App
