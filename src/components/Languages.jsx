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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[#8dff8d]">
            <div className="p-4 border border-[#8dff8d]/20 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🇬🇧</span>
                <h3 className="text-xl font-bold terminal-text"><span className="keyword">English</span></h3>
              </div>
              <div className="text-sm text-[#8dff8d]/80">Professional proficiency</div>
            </div>

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
              <div className="text-sm text-[#8dff8d]/80">Native proficiency</div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Languages
