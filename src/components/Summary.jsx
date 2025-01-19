import { motion } from 'framer-motion'

const Summary = () => {
  return (
    <div className="max-w-3xl mx-auto my-6 sm:my-8 md:my-12 lg:my-16">
      <motion.p 
        className="text-lg leading-relaxed terminal-text typewriter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <span className="keyword">Senior</span> <span className="function">Software</span> <span className="function">Engineer</span> with extensive experience <span className="keyword">driving</span> technical innovation
        and <span className="keyword">delivering</span> complex projects. <span className="function">Expertise</span> in architecting and scaling distributed
        systems, optimizing performance, and implementing security-first solutions.
      </motion.p>
    </div>
  )
}

export default Summary
