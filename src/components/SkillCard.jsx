import { motion } from 'framer-motion'

const SkillCard = ({ title, skills }) => {
  return (
    <motion.div 
      className="skill-card p-6 rounded-lg border border-[#8dff8d]/20 bg-[#1e1e1e]/50 backdrop-blur-sm hover:border-[#8dff8d]/40 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <h4 className="text-xl font-semibold mb-4 text-[#8dff8d]">
        <span className="text-[#8dff8d]/50 mr-2">#</span>
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className={`text-sm px-3 py-1 rounded-full border ${
              skill.type === 'keyword' ? 'border-[#569cd6]/20 text-[#569cd6]' :
              skill.type === 'function' ? 'border-[#dcdcaa]/20 text-[#dcdcaa]' :
              'border-[#ce9178]/20 text-[#ce9178]'
            } hover:bg-[#8dff8d]/10 transition-colors`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default SkillCard
