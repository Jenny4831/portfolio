import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className="relative transform perspective-1000 rotate-x-0 md:rotate-x-3 md:rotate-y-2 w-full max-w-[90vw] mt-14">
      <motion.h1 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#8dff8d] mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight terminal-text typewriter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="flex justify-center overflow-x-auto">
          <pre className="text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-pre-wrap break-all">
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
        className="text-lg sm:text-xl md:text-2xl text-[#8dff8d]/60 font-normal mb-6 sm:mb-8 md:mb-12 lg:mb-16 tracking-tight terminal-text typewriter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Senior Software Engineer<span className="cursor"></span>
      </motion.h2>
    </div>
  )
}

export default Header
