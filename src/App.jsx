import { motion } from 'framer-motion'
import Timeline from './Timeline.jsx'
import SideNav from './components/SideNav.jsx'
import HorizontalNavBar from './components/HorizontalNavBar.jsx'
import Socials from './components/socials.jsx'
import Summary from './components/Summary.jsx'
import SectionDivider from './components/SectionDivider.jsx'
import SectionTitle from './components/SectionTitle.jsx'
import Header from './components/Header.jsx'
import SkillCard from './components/SkillCard.jsx'

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
      <div className="max-w-3xl mx-auto">
        <SectionDivider />
      <motion.section 
        id="education" 
        className="scroll-mt-20 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle>Education</SectionTitle>
        <div className="section-content">
        <div className="text-left">
          <h5 className="font-bold mb-2 terminal-text text-[#8dff8d] border-b border-[#8dff8d]/20 pb-2">
            <span className="text-[#8dff8d]/50">★</span> University of Sydney <span className="text-[#8dff8d]/50">★</span>
          </h5>
          <p className="text-base text-[#8dff8d]/80 mb-4 terminal-text">Nov 2017 - Bachelor of Science: Computer Science</p>
          <p className="text-xl leading-relaxed terminal-text text-[#8dff8d]">
            <span className="keyword">Distinction</span> <span className="function">units</span>: 
            <span className="string">"Foundations of IT"</span>, 
            <span className="string">"Database Systems"</span>, 
            <span className="string">"Internet Software Platforms"</span>, 
            <span className="string">"Human-Computer Interaction"</span>
          </p>
        </div>
        <div className="text-left mt-8">
          <h5 className="font-bold mb-2 terminal-text text-[#8dff8d] border-b border-[#8dff8d]/20 pb-2 mt-8">
            <span className="text-[#8dff8d]/50">★</span> Achievements <span className="text-[#8dff8d]/50">★</span>
          </h5>
          <p className="text-xl leading-relaxed terminal-text text-[#8dff8d]">
            <span className="function">Awarded</span> <span className="function">Microsoft</span> <span className="function">Research</span> <span className="function">Asia</span> <span className="function">Prize</span> <span className="keyword">for</span> <span className="function">Junior</span> <span className="function">Software</span> <span className="function">Development</span> <span className="function">Projects</span> <span className="keyword">at</span> <span className="function">USYD</span>
          </p>
        </div>
        </div>
      </motion.section>
      </div>

      <div className="max-w-3xl mx-auto">
        <SectionDivider />
      <motion.section 
        id="skills" 
        className="scroll-mt-20 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle>Skills</SectionTitle>
        <div className="section-content">
          <div className="text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              title="Programming" 
              skills={[
                { name: "Go", type: "keyword" },
                { name: "JavaScript", type: "keyword" },
                { name: "TypeScript", type: "keyword" },
                { name: "Python", type: "keyword" },
                { name: "HTML5", type: "string" },
                { name: "SCSS", type: "string" },
                { name: "CSS", type: "string" }
              ]}
            />
            <SkillCard 
              title="Databases" 
              skills={[
                { name: "Postgres", type: "function" },
                { name: "DynamoDB", type: "function" },
                { name: "SQL", type: "keyword" }
              ]}
            />
            <SkillCard 
              title="Frameworks" 
              skills={[
                { name: "ReactJS", type: "function" },
                { name: "Redux", type: "function" },
                { name: "Hugo", type: "function" }
              ]}
            />
            <SkillCard 
              title="Infrastructure & DevOps" 
              skills={[
                { name: "AWS", type: "keyword" },
                { name: "S3", type: "function" },
                { name: "Docker", type: "function" },
                { name: "Kafka", type: "function" },
                { name: "SQS", type: "function" },
                { name: "Buildkite", type: "function" },
                { name: "Kubernetes", type: "function" }
              ]}
            />
            <SkillCard 
              title="Monitoring" 
              skills={[
                { name: "Prometheus", type: "function" },
                { name: "Grafana", type: "function" },
                { name: "Kibana", type: "function" }
              ]}
            />
            </div>
          </div>
        </div>
      </motion.section>

      </div>
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
          <div className="text-[#8dff8d]">
            <p><span className="keyword">Spanish</span></p>
            <p><span className="function">Chinese</span> (<span className="string">Cantonese</span>)</p>
            <p><span className="function">Chinese</span> (<span className="string">Mandarin</span>)</p>
            <p><span className="keyword">English</span></p>
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
