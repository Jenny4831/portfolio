import PropTypes from 'prop-types';
import { motion } from 'framer-motion'

const SkillCard = ({ title, skills }) => {
  return (
    <motion.div 
      className="skill-card p-6 rounded-xl border border-white/10 bg-[#171a21]/80 backdrop-blur-sm hover:border-[#569cd6]/40 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <h4 className="text-xl font-semibold mb-4 text-[#8dff8d]">
        <span className="text-[#569cd6]/80 mr-2">const</span>
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className={`text-sm px-3 py-1.5 rounded-md border bg-white/[0.02] ${
              skill.type === 'keyword' ? 'border-[#569cd6]/25 text-[#569cd6]' :
              skill.type === 'function' ? 'border-[#dcdcaa]/25 text-[#dcdcaa]' :
              'border-[#ce9178]/25 text-[#ce9178]'
            } hover:bg-white/[0.05] transition-colors`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SkillCard
