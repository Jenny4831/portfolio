import Timeline from './Timeline.jsx'
import SideNav from './components/SideNav.jsx'
import Socials from './components/socials.jsx'
import SectionDivider from './components/SectionDivider.jsx'
import SectionTitle from './components/SectionTitle.jsx'

function App() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-8 lg:py-16 text-center min-h-screen flex flex-col justify-center pl-16 sm:pl-20 md:pl-64 lg:pl-80">
      <SideNav />
      <div className="code-bg"></div>
      <div className="relative z-10 transform perspective-1000 rotate-x-0 md:rotate-x-3 md:rotate-y-2">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#8dff8d] mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight terminal-text typewriter animate-fadeIn" data-text="Naimen (Jenny) Zhen Liang">
        <div className="flex justify-center">
          <pre className="text-sm sm:text-base md:text-lg lg:text-xl">
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
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl text-[#8dff8d]/60 font-normal mb-6 sm:mb-8 md:mb-12 lg:mb-16 tracking-tight terminal-text typewriter animate-fadeIn" data-text="Senior Software Engineer">
        Senior Software Engineer<span className="cursor"></span>
      </h2>
      
      <Socials/>

      <div className="max-w-3xl mx-auto my-6 sm:my-8 md:my-12 lg:my-16">
        <p className="text-lg leading-relaxed terminal-text animate-fadeIn typewriter" data-text="Senior Software Engineer with extensive experience driving technical innovation
          and delivering complex projects. Expertise in architecting and scaling distributed
          systems, optimizing performance, and implementing security-first solutions.">
          <span className="keyword">Senior</span> <span className="function">Software</span> <span className="function">Engineer</span> with extensive experience <span className="keyword">driving</span> technical innovation
          and <span className="keyword">delivering</span> complex projects. <span className="function">Expertise</span> in architecting and scaling distributed
          systems, optimizing performance, and implementing security-first solutions.
        </p>
      </div>
      
      <SectionDivider />
      <section id="experience" className="scroll-mt-20">
        <SectionTitle>Experience</SectionTitle>
        <div className="section-content">
          <Timeline />
        </div>
      </section>
      
      <SectionDivider />
      <section id="education" className="scroll-mt-20 max-w-3xl mx-auto">
        <SectionTitle>Education</SectionTitle>
        <div className="section-content">
        <div className="text-left">
          <h5 className="font-bold mb-2 terminal-text text-[#8dff8d] border-b border-[#8dff8d]/20 pb-2">
            <span className="text-[#8dff8d]/50">★</span> University of Sydney <span className="text-[#8dff8d]/50">★</span>
          </h5>
          <p className="text-base text-[#8dff8d]/80 mb-4 terminal-text">Nov 2017 - Bachelor of Science: Computer Science</p>
          <p className="text-xl leading-relaxed terminal-text text-[#8dff8d]">
            <span className="keyword">Distinction</span> <span className="function">units</span>: 
            <span className="string">"Foundations of IT"</span>, 
            <span className="string">"Database Systems"</span>, 
            <span className="string">"Internet Software Platforms"</span>, 
            <span className="string">"Human-Computer Interaction"</span>
          </p>
        </div>
        <div className="text-left mt-8">
          <h5 className="font-bold mb-2 terminal-text text-[#8dff8d] border-b border-[#8dff8d]/20 pb-2 mt-8">
            <span className="text-[#8dff8d]/50">★</span> Achievements <span className="text-[#8dff8d]/50">★</span>
          </h5>
          <p className="text-xl leading-relaxed terminal-text text-[#8dff8d]">
            <span className="function">Awarded</span> <span className="function">Microsoft</span> <span className="function">Research</span> <span className="function">Asia</span> <span className="function">Prize</span> <span className="keyword">for</span> <span className="function">Junior</span> <span className="function">Software</span> <span className="function">Development</span> <span className="function">Projects</span> <span className="keyword">at</span> <span className="function">USYD</span>
          </p>
        </div>
        </div>
      </section>
      </div>

      <SectionDivider />
      <section id="skills" className="scroll-mt-20 max-w-3xl mx-auto">
        <SectionTitle>Skills</SectionTitle>
        <div className="section-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#8dff8d]">
            <div>
              <h4 className="text-lg font-semibold mb-2">Programming</h4>
              <p><span className="keyword">Go</span>, <span className="keyword">JavaScript</span>, <span className="keyword">TypeScript</span>, <span className="keyword">Python</span></p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Databases</h4>
              <p><span className="function">Postgres</span>, <span className="function">DynamoDB</span>, <span className="keyword">SQL</span></p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Frontend</h4>
              <p><span className="string">HTML5</span>, <span className="string">SCSS</span>, <span className="string">CSS</span>, <span className="function">Redux</span></p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Frameworks</h4>
              <p><span className="function">ReactJS</span>, <span className="function">Redux</span>, <span className="function">Hugo</span></p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Infrastructure & DevOps</h4>
              <p><span className="keyword">AWS</span>, <span className="function">S3</span>, <span className="function">Docker</span>, <span className="function">Kafka</span>, <span className="function">SQS</span>, <span className="function">Buildkite</span>, <span className="function">Kubernetes</span></p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Monitoring</h4>
              <p><span className="function">Prometheus</span>, <span className="function">Grafana</span>, <span className="function">Kibana</span></p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />
      <section id="languages" className="scroll-mt-20 max-w-3xl mx-auto">
        <SectionTitle>Spoken Languages</SectionTitle>
        <div className="section-content">
          <div className="text-[#8dff8d]">
            <p><span className="keyword">Spanish</span></p>
            <p><span className="function">Chinese</span> (<span className="string">Cantonese</span>)</p>
            <p><span className="function">Chinese</span> (<span className="string">Mandarin</span>)</p>
            <p><span className="keyword">English</span></p>
          </div>
          </div>
      </section>

      <SectionDivider />
      <section id="hobbies" className="scroll-mt-20 max-w-3xl mx-auto">
        <SectionTitle>Hobbies</SectionTitle>
        <div className="section-content">
          <div className="text-[#8dff8d]">
            <p><span className="function">Learning</span> <span className="string">Godot</span></p>
            <p><span className="keyword">Painting</span></p>
            <p><span className="keyword">Baking</span></p>
            <p><span className="function">Travelling</span></p>
          </div>
          </div>
      </section>
      
    </div>
  )
}

export default App
