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
        <span className="keyword">Senior</span> <span className="function">Backend</span> <span className="function">Engineer</span> with 8+ years building
        high-concurrency, low-latency distributed systems. <span className="function">Expertise</span> in event-driven architectures,
        scalable cloud platforms, and zero-downtime migrations for 500K+ users.
      </motion.p>
    </div>
  )
}

export default Summary
