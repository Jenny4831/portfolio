import Timeline from './Timeline.jsx'

function App() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16 text-center min-h-screen flex flex-col justify-center">
      <h1 className="text-7xl font-bold text-primary mb-6 animate-fadeIn leading-tight tracking-tight">
        Naimen (Jenny) Zhen Liang
      </h1>
      <h2 className="text-2xl text-text-muted font-normal mb-16 animate-fadeIn tracking-tight">
        Software Engineer | Full Stack Developer
      </h2>
      <div className="max-w-2xl mx-auto my-16 p-12 bg-background-light rounded-2xl shadow-custom backdrop-blur-lg border border-white/10 animate-fadeUp">
        <p className="text-lg text-[#2A1E17] leading-relaxed">
          Senior Software Engineer with extensive experience driving technical innovation and delivering complex projects. 
          Expertise in architecting and scaling distributed systems, optimizing performance, and implementing security-first solutions. 
          Proven track record in leading initiatives from research and design through to deployment, while working collaboratively with cross-functional teams. 
          Passionate about mentoring engineers and interns. Committed to managing the backend community to promote knowledge sharing and upskill team members.
        </p>
      </div>
      <Timeline />
    </div>
  )
}

export default App
