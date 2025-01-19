import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle.jsx'
import SectionDivider from './SectionDivider.jsx'

const Languages = () => {
  return (
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#8dff8d]">
            <motion.div 
              className="hobby-card bg-[#0d1117] p-4 rounded-lg border border-[#8dff8d]/20 hover:border-[#8dff8d] transition-all duration-300 hover:shadow-[0_0_15px_rgba(141,255,141,0.3)]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl mt-1">🇬🇧</span>
                <div className="text-left">
                  <p className="text-xl font-code"><span className="keyword">English</span></p>
                  <p className="text-sm text-[#8dff8d]/80">Professional proficiency</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="hobby-card bg-[#0d1117] p-4 rounded-lg border border-[#8dff8d]/20 hover:border-[#8dff8d] transition-all duration-300 hover:shadow-[0_0_15px_rgba(141,255,141,0.3)]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl mt-1">🇪🇸</span>
                <div className="text-left">
                  <p className="text-xl font-code"><span className="keyword">Spanish</span></p>
                  <p className="text-sm text-[#8dff8d]/80">Native proficiency</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="hobby-card bg-[#0d1117] p-4 rounded-lg border border-[#8dff8d]/20 hover:border-[#8dff8d] transition-all duration-300 hover:shadow-[0_0_15px_rgba(141,255,141,0.3)]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl mt-1">🇨🇳</span>
                <div className="text-left">
                  <p className="text-xl font-code">
                    <span className="function">Chinese</span> (<span className="string">Cantonese</span>)
                  </p>
                  <p className="text-sm text-[#8dff8d]/80">Native proficiency</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="hobby-card bg-[#0d1117] p-4 rounded-lg border border-[#8dff8d]/20 hover:border-[#8dff8d] transition-all duration-300 hover:shadow-[0_0_15px_rgba(141,255,141,0.3)]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl mt-1">🇨🇳</span>
                <div className="text-left">
                  <p className="text-xl font-code">
                    <span className="function">Chinese</span> (<span className="string">Mandarin</span>)
                  </p>
                  <p className="text-sm text-[#8dff8d]/80">Native proficiency</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Languages
