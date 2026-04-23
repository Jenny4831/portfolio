import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className="relative w-full max-w-[72rem] mx-auto mt-2 md:mt-4">
      <motion.div
        className="hero-eyebrow"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.55, delay: 0.05 }}
      >
        <span className="hero-eyebrow-badge">hello.ts</span>
        <span className="hero-eyebrow-copy">Builder of calm systems, clean APIs, and reliable migrations</span>
      </motion.div>
      <motion.h1 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#8dff8d] mb-1 sm:mb-2 md:mb-3 leading-tight tracking-tight terminal-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="hero-ascii-wrap">
          <pre className="hero-ascii text-[7px] sm:text-[8px] md:text-[9px] lg:text-[11px] whitespace-pre-wrap break-all">
            {`
      ____.                                                        
    |    | ____   ____   ____ ___.__.                             
    |    _/ __ \\ /    \\ /    <   |  |                             
/\\__|    \\  ___/|   |  |   |  \\___  |                             
\\________|\\___  |___|  |___|  / ____|                             
_________.__  \\/     \\/     \\/\\/.____    .__                      
\\____    |  |__   ____   ____   |    |   |_______    ____   ____  
  /     /|  |  \\_/ __ \\ /    \\  |    |   |  \\__  \\  /    \\ / ___\\ 
 /     /_|   Y  \\  ___/|   |  \\ |    |___|  |/ __ \\|   |  / /_/  >
/_______ |___|  /\\___  |___|  / |_______ |__(____  |___|  \\___  / 
        \\/    \\/     \\/     \\/          \\/       \\/     \\/_____/  
            `}
          </pre>
        </div>
      </motion.h1>
      <motion.h2 
        className="hero-title text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#8dff8d]/75 font-normal mb-4 sm:mb-5 md:mb-6 tracking-tight terminal-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Senior Backend Engineer who likes making complex systems feel simple<span className="cursor"></span>
      </motion.h2>
    </div>
  )
}

export default Header
