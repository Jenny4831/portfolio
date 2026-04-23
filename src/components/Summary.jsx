import { motion } from 'framer-motion'

const Summary = () => {
  return (
    <div className="max-w-3xl mx-auto my-5 sm:my-6 md:my-8 lg:my-10">
      <motion.div
        className="hero-summary-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <p className="text-lg leading-relaxed terminal-text">
          <span className="keyword">Hi, I&apos;m Jenny.</span> I build backend systems that stay fast, dependable, and understandable even as they grow.
        </p>
        <p className="text-base sm:text-lg leading-relaxed terminal-text text-[#d4d4d4]/85 mt-4">
          Over the last 8+ years I&apos;ve worked across billing, compliance, internal tooling, and real-time distributed systems,
          with a soft spot for event-driven architecture, thoughtful migrations, and making sharp technical decisions feel calm for everyone around them.
        </p>
        <p className="text-sm sm:text-base leading-relaxed terminal-text text-[#d4d4d4]/70 mt-4">
          <span className="string">Fun fact:</span> a non-zero percentage of my optimism is probably powered by onigiri.
        </p>
      </motion.div>
    </div>
  )
}

export default Summary
