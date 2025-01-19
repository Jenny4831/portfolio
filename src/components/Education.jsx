import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle.jsx'
import SectionDivider from './SectionDivider.jsx'

const Education = () => {
  return (
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
  )
}

export default Education
