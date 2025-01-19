import { motion } from 'framer-motion';

const CardGrid = ({ children, className = '' }) => {
  return (
    <motion.div 
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

export const Card = ({ emoji, title, subtitle, className = '' }) => {
    return (
      <motion.div
        className={`hobby-card bg-[#0d1117] p-4 rounded-lg border border-[#8dff8d]/20 hover:border-[#8dff8d] transition-all duration-300 hover:shadow-[0_0_15px_rgba(141,255,141,0.3)] ${className}`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex items-start gap-3">
          <span className="text-3xl mt-1">{emoji}</span>
          <div className="text-left">
            <p className="text-xl font-code">{title}</p>
            <p className="text-sm text-[#8dff8d]/80">{subtitle}</p>
          </div>
        </div>
      </motion.div>
    );
  };

export default CardGrid
