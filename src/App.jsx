import Timeline from './Timeline.jsx'

function App() {
  return (
    <div className="relative max-w-7xl mx-auto px-8 py-16 text-center min-h-screen flex flex-col justify-center">
      <div className="code-bg"></div>
      <div className="relative z-10 transform perspective-1000 rotate-x-3 rotate-y-2">
      <h1 className="text-7xl font-bold text-primary mb-6 animate-fadeIn leading-tight tracking-tight">
        Naimen (Jenny) Zhen Liang
      </h1>
      <h2 className="text-2xl text-text-muted font-normal mb-16 animate-fadeIn tracking-tight">
        Senior Software Engineer
      </h2>
      <div className="max-w-3xl mx-auto my-16 p-12 bg-[#252526] rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-[#3c3c3c] animate-fadeUp transform transition-all hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]">
        <p className="text-lg text-[#d4d4d4] leading-relaxed">
          Senior Software Engineer with extensive experience driving technical innovation and delivering complex projects. 
          Expertise in architecting and scaling distributed systems, optimizing performance, and implementing security-first solutions.
        </p>
      </div>
      <Timeline />
      </div>
    </div>
  )
}

export default App
