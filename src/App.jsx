import Timeline from './Timeline.jsx'
import SideNav from './components/SideNav.jsx'

function App() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16 text-center min-h-screen flex flex-col justify-center pl-0 md:pl-72">
      <SideNav />
      <div className="code-bg"></div>
      <div className="relative z-10 transform perspective-1000 rotate-x-0 md:rotate-x-3 md:rotate-y-2">
      <h1 className="text-3xl md:text-5xl font-bold text-[#8dff8d] mb-4 md:mb-6 animate-fadeIn leading-tight tracking-tight terminal-text">
        Naimen (Jenny) Zhen Liang<span className="cursor"></span>
      </h1>
      <h2 className="text-xl md:text-2xl text-[#8dff8d]/60 font-normal mb-8 md:mb-16 animate-fadeIn tracking-tight terminal-text">
        Senior Software Engineer<span className="cursor"></span>
      </h2>
      <div className="max-w-3xl mx-auto my-8 md:my-16 p-6 md:p-12 bg-[#252526] rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-[#3c3c3c] animate-fadeUp transform transition-all hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]">
        <p className="text-lg text-blue-400 leading-relaxed terminal-text">
          Senior Software Engineer with extensive experience driving technical innovation
          and delivering complex projects. Expertise in architecting and scaling distributed
          systems, optimizing performance, and implementing security-first solutions.
        </p>
      </div>
      
      <h3 className="text-2xl text-[#8dff8d] font-bold mb-6 terminal-text">Experience</h3>
      <Timeline />
      
      <div className="max-w-3xl mx-auto my-16 p-12 bg-[#252526] rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-[#3c3c3c] animate-fadeUp transform transition-all hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]">
        <h3 className="text-2xl text-[#8dff8d] font-bold mb-6 terminal-text">Education</h3>
        <div className="text-left">
          <h4 className="text-xl text-[#8dff8d] font-semibold mb-2 terminal-text">Bachelor of Science: Computer Science</h4>
          <p className="text-sm text-[#8dff8d]/80 mb-4 terminal-text">Nov 2017</p>
          <p className="text-lg text-[#8dff8d] leading-relaxed terminal-text">
            University of Sydney, Sydney, NSW<br/>
            Distinction units: Foundations of IT, Database Systems, Internet Software Platforms, Human-Computer Interaction
          </p>
        </div>
        <div className="text-left mt-8">
          <h3 className="text-2xl text-[#8dff8d] font-bold mb-6 terminal-text">Achievements</h3>
          <p className="text-lg text-[#8dff8d] leading-relaxed terminal-text">
            - Awarded Microsoft Research Asia Prize for Junior Software Development Projects at USYD
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
