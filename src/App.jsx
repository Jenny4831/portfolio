import { motion } from 'framer-motion';
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

function App() {
  return (
    <div>
      <HorizontalNavBar />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 lg:py-16 text-center min-h-screen sm:pl-20 md:pl-64 lg:pl-80 pb-32 space-y-12 scroll-smooth snap-y snap-proximity">
        <SideNav />
        <div className="code-bg"></div>
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
          <Hobbies />
        </div>
      </div>
    </div>
  );
}

export default App
