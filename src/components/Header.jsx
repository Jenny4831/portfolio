import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className="relative transform perspective-1000 rotate-x-0 md:rotate-x-2 md:rotate-y-1 w-full max-w-[72rem] mx-auto mt-2 md:mt-4">
      <motion.h1 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#8dff8d] mb-1 sm:mb-2 md:mb-3 leading-tight tracking-tight terminal-text typewriter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="flex justify-center">
          <pre className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[11px] whitespace-pre-wrap break-all">
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
        className="text-lg sm:text-xl md:text-2xl text-[#8dff8d]/60 font-normal mb-4 sm:mb-6 md:mb-8 lg:mb-10 tracking-tight terminal-text typewriter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Senior Backend Engineer<span className="cursor"></span>
      </motion.h2>
    </div>
  )
}

export default Header
