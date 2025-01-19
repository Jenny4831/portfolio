import Timeline from './Timeline.jsx'
import SideNav from './components/SideNav.jsx'

function App() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-8 lg:py-16 text-center min-h-screen flex flex-col justify-center pl-16 sm:pl-20 md:pl-64 lg:pl-80">
      <SideNav />
      <div className="code-bg"></div>
      <div className="relative z-10 transform perspective-1000 rotate-x-0 md:rotate-x-3 md:rotate-y-2">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#8dff8d] mb-3 sm:mb-4 md:mb-6 animate-fadeIn leading-tight tracking-tight terminal-text typewriter" data-text="Naimen (Jenny) Zhen Liang">
        Naimen (Jenny) Zhen Liang<span className="cursor"></span>
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl text-[#8dff8d]/60 font-normal mb-6 sm:mb-8 md:mb-12 lg:mb-16 animate-fadeIn tracking-tight terminal-text typewriter" data-text="Senior Software Engineer">
        Senior Software Engineer<span className="cursor"></span>
      </h2>
      <div className="max-w-3xl mx-auto my-6 sm:my-8 md:my-12 lg:my-16 p-4 sm:p-6 md:p-8 lg:p-12 bg-[#252526] rounded-xl sm:rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-[#3c3c3c] animate-fadeUp transform transition-all hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]">
        <p className="text-lg text-blue-400 leading-relaxed terminal-text animate-fadeIn typewriter" data-text="Senior Software Engineer with extensive experience driving technical innovation
          and delivering complex projects. Expertise in architecting and scaling distributed
          systems, optimizing performance, and implementing security-first solutions.">
          Senior Software Engineer with extensive experience driving technical innovation
          and delivering complex projects. Expertise in architecting and scaling distributed
          systems, optimizing performance, and implementing security-first solutions.
        </p>
      </div>
      
      <section id="experience" className="scroll-mt-20">
        <h3 className="text-2xl text-[#8dff8d] font-bold mb-6 terminal-text">Experience</h3>
      </section>
      <Timeline />
      
      <section id="education" className="scroll-mt-20">
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
      </section>

      <section id="skills" className="scroll-mt-20">
        <div className="max-w-3xl mx-auto my-16 p-12 bg-[#252526] rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-[#3c3c3c] animate-fadeUp transform transition-all hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]">
          <h3 className="text-2xl text-[#8dff8d] font-bold mb-6 terminal-text">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#8dff8d]">
            <div>
              <h4 className="text-lg font-semibold mb-2">Programming</h4>
              <p>Go, JavaScript, TypeScript, Python</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Databases</h4>
              <p>Postgres, DynamoDB, SQL</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Frontend</h4>
              <p>HTML5, SCSS, CSS, Redux</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Frameworks</h4>
              <p>ReactJS, Redux, Hugo</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Infrastructure & DevOps</h4>
              <p>AWS, S3, Docker, Kafka, SQS, Buildkite, Kubernetes</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Monitoring</h4>
              <p>Prometheus, Grafana, Kibana</p>
            </div>
          </div>
        </div>
      </section>

      <section id="languages" className="scroll-mt-20">
        <div className="max-w-3xl mx-auto my-16 p-12 bg-[#252526] rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-[#3c3c3c] animate-fadeUp transform transition-all hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]">
          <h3 className="text-2xl text-[#8dff8d] font-bold mb-6 terminal-text">Languages</h3>
          <div className="text-[#8dff8d]">
            <p>Spanish</p>
            <p>Chinese (Cantonese)</p>
            <p>Chinese (Mandarin)</p>
            <p>English</p>
          </div>
        </div>
      </section>

      <section id="hobbies" className="scroll-mt-20">
        <div className="max-w-3xl mx-auto my-16 p-12 bg-[#252526] rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-[#3c3c3c] animate-fadeUp transform transition-all hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]">
          <h3 className="text-2xl text-[#8dff8d] font-bold mb-6 terminal-text">Hobbies</h3>
          <div className="text-[#8dff8d]">
            <p>Learning Godot</p>
            <p>Painting</p>
            <p>Baking</p>
            <p>Travelling</p>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

export default App
