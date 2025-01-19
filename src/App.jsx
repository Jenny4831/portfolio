import Timeline from './Timeline.jsx'
import SideNav from './components/SideNav.jsx'

function App() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-8 lg:py-16 text-center min-h-screen flex flex-col justify-center pl-16 sm:pl-20 md:pl-64 lg:pl-80">
      <SideNav />
      <div className="code-bg"></div>
      <div className="relative z-10 transform perspective-1000 rotate-x-0 md:rotate-x-3 md:rotate-y-2">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#8dff8d] mb-3 sm:mb-4 md:mb-6 animate-fadeIn leading-tight tracking-tight terminal-text typewriter" data-text="Naimen (Jenny) Zhen Liang">
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
      <h2 className="text-lg sm:text-xl md:text-2xl text-[#8dff8d]/60 font-normal mb-6 sm:mb-8 md:mb-12 lg:mb-16 animate-fadeIn tracking-tight terminal-text typewriter" data-text="Senior Software Engineer">
        Senior Software Engineer<span className="cursor"></span>
      </h2>
      
      <div className="flex justify-center space-x-4 mb-6 sm:mb-8 md:mb-12 lg:mb-16">
        <a href="https://www.linkedin.com/in/naimen-zhen-liang" target="_blank" rel="noopener noreferrer" className="text-[#8dff8d]/80 hover:text-[#8dff8d] transition-colors flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
            <g>
              <path d="M22.8525 2.2874999999999996H24v19.424999999999997h-1.1475Z" fill="currentColor" stroke-width="0.75"></path>
              <path d="M21.7125 21.7125h1.1400000000000001v1.1475h-1.1400000000000001Z" fill="currentColor" stroke-width="0.75"></path>
              <path d="M21.7125 1.1400000000000001h1.1400000000000001v1.1475h-1.1400000000000001Z" fill="currentColor" stroke-width="0.75"></path>
              <path d="M20.565 3.4275h1.1475v17.145h-1.1475Z" fill="currentColor" stroke-width="0.75"></path>
              <path d="M2.2800000000000002 22.86h19.4325V24H2.2800000000000002Z" fill="currentColor" stroke-width="0.75"></path>
              <path d="M3.4275 20.572499999999998h17.137500000000003v1.1400000000000001H3.4275Z" fill="currentColor" stroke-width="0.75"></path>
              <path d="m17.137500000000003 11.43 -1.1400000000000001 0 0 -1.1475 -2.2874999999999996 0 0 1.1475 -1.1400000000000001 0 0 -1.1475 -2.2874999999999996 0 0 6.862500000000001 2.2874999999999996 0 0 -3.4275 1.1400000000000001 0 0 -1.1475 1.1475 0 0 1.1475 1.1400000000000001 0 0 3.4275 2.2874999999999996 0 0 -4.574999999999999 -1.1475 0 0 -1.1400000000000001z" fill="currentColor" stroke-width="0.75"></path>
              <path d="M5.7075000000000005 10.2825h2.2874999999999996v6.862500000000001H5.7075000000000005Z" fill="currentColor" stroke-width="0.75"></path>
              <path d="M5.7075000000000005 6.855h2.2874999999999996v2.2874999999999996H5.7075000000000005Z" fill="currentColor" stroke-width="0.75"></path>
              <path d="M3.4275 2.2874999999999996h17.137500000000003v1.1400000000000001H3.4275Z" fill="currentColor" stroke-width="0.75"></path>
              <path d="M2.2800000000000002 0h19.4325v1.1400000000000001H2.2800000000000002Z" fill="currentColor" stroke-width="0.75"></path>
              <path d="M2.2800000000000002 3.4275h1.1475v17.145H2.2800000000000002Z" fill="currentColor" stroke-width="0.75"></path>
              <path d="M1.1400000000000001 21.7125h1.1400000000000001v1.1475H1.1400000000000001Z" fill="currentColor" stroke-width="0.75"></path>
              <path d="M1.1400000000000001 1.1400000000000001h1.1400000000000001v1.1475H1.1400000000000001Z" fill="currentColor" stroke-width="0.75"></path>
              <path d="M0 2.2874999999999996h1.1400000000000001v19.424999999999997H0Z" fill="currentColor" stroke-width="0.75"></path>
            </g>
          </svg>
          LinkedIn
        </a>
        <a href="https://github.com/Jenny4831" target="_blank" rel="noopener noreferrer" className="text-[#8dff8d]/80 hover:text-[#8dff8d] transition-colors flex items-center">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2">
            <path d="M7.999933333333333 0.35346666666666665c-1.8616000000000001 0.00006666666666666667 -3.662466666666666 0.6626 -5.080266666666667 1.8689333333333331C1.5017999999999998 3.4287333333333327 0.5594666666666666 5.100266666666666 0.26126666666666665 6.937866666666666c-0.29819999999999997 1.8375333333333332 0.0672 3.7212666666666667 1.0308 5.3141333333333325 0.9635333333333334 1.5927333333333333 2.462466666666667 2.790733333333333 4.228533333333333 3.3795333333333333 0.39199999999999996 0.0686 0.5389999999999999 -0.1666 0.5389999999999999 -0.37239999999999995 0 -0.18619999999999998 -0.0098 -0.8036 -0.0098 -1.4602 -1.9697999999999998 0.36260000000000003 -2.4794 -0.4801333333333333 -2.6361999999999997 -0.9211333333333332 -0.174 -0.4288666666666666 -0.4498 -0.8089333333333333 -0.8036 -1.1074 -0.2744 -0.147 -0.6664 -0.5095999999999999 -0.0098 -0.5194 0.2507333333333333 0.027200000000000002 0.4911333333333333 0.11446666666666666 0.7010000000000001 0.2543333333333333 0.2098 0.13986666666666664 0.3828666666666667 0.3283333333333333 0.5044 0.5492666666666666 0.10719999999999999 0.1926 0.25139999999999996 0.36219999999999997 0.4242666666666666 0.499 0.17286666666666664 0.13679999999999998 0.37106666666666666 0.2382 0.5831999999999999 0.29819999999999997 0.2121333333333333 0.060066666666666664 0.434 0.07773333333333332 0.6529333333333334 0.05193333333333333s0.43066666666666664 -0.09453333333333333 0.6229333333333333 -0.2023333333333333c0.03393333333333333 -0.39859999999999995 0.2116 -0.7712666666666667 0.4998666666666667 -1.0486 -1.7444 -0.19599999999999998 -3.5671999999999997 -0.8722 -3.5671999999999997 -3.8709999999999996 -0.011 -0.7791333333333333 0.27646666666666664 -1.533 0.8036 -2.106933333333333 -0.23966666666666664 -0.6772 -0.21166666666666667 -1.4203999999999999 0.0784 -2.0776 0 0 0.6565333333333333 -0.20579999999999998 2.1559999999999997 0.8036 1.2828 -0.3528 2.6370666666666667 -0.3528 3.9199333333333333 0 1.4993999999999998 -1.0191999999999999 2.1559999999999997 -0.8036 2.1559999999999997 -0.8036 0.29006666666666664 0.6572 0.3181333333333333 1.4003999999999999 0.0784 2.0776 0.5286 0.5729333333333333 0.8164666666666666 1.3275333333333332 0.8036 2.106933333333333 0 3.0086 -1.8325999999999998 3.675 -3.577 3.8709999999999996 0.18706666666666666 0.1896 0.3311333333333333 0.41733333333333333 0.42246666666666666 0.6675333333333333 0.09133333333333334 0.2503333333333333 0.1277333333333333 0.5173333333333333 0.10673333333333332 0.7828666666666666 0 1.0486666666666666 -0.0098 1.8913333333333333 -0.0098 2.1559333333333335 0 0.20579999999999998 0.147 0.4508 0.5389999999999999 0.37239999999999995 1.7629333333333332 -0.5935333333333332 3.2575333333333334 -1.7943333333333333 4.217 -3.3879333333333332 0.9595333333333333 -1.5936666666666666 1.3214 -3.476466666666666 1.0211333333333332 -5.312266666666666 -0.3002666666666667 -1.8357333333333332 -1.2431333333333332 -3.5050666666666666 -2.6604 -4.709933333333333C11.659466666666667 1.0164666666666666 9.860133333333334 0.3544666666666666 7.999933333333333 0.35346666666666665Z" fill="currentColor" stroke-width="0.6667"></path>
          </svg>
          GitHub
        </a>
      </div>

      <div className="max-w-3xl mx-auto my-6 sm:my-8 md:my-12 lg:my-16">
        <p className="text-lg leading-relaxed terminal-text animate-fadeIn typewriter" data-text="Senior Software Engineer with extensive experience driving technical innovation
          and delivering complex projects. Expertise in architecting and scaling distributed
          systems, optimizing performance, and implementing security-first solutions.">
          <span className="keyword">Senior</span> <span className="function">Software</span> <span className="function">Engineer</span> with extensive experience <span className="keyword">driving</span> technical innovation
          and <span className="keyword">delivering</span> complex projects. <span className="function">Expertise</span> in architecting and scaling distributed
          systems, optimizing performance, and implementing security-first solutions.
        </p>
      </div>
      
      <div className="section-divider"></div>
      <section id="experience" className="scroll-mt-20">
        <h3 className="section-title">Experience</h3>
        <div className="section-content">
          <Timeline />
        </div>
      </section>
      
      <div className="section-divider"></div>
      <section id="education" className="scroll-mt-20 max-w-3xl mx-auto">
        <h3 className="section-title">Education</h3>
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

      <div className="section-divider"></div>
      <section id="skills" className="scroll-mt-20 max-w-3xl mx-auto">
        <h3 className="section-title">Skills</h3>
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

      <div className="section-divider"></div>
      <section id="languages" className="scroll-mt-20 max-w-3xl mx-auto">
        <h3 className="section-title">Spoken Languages</h3>
        <div className="section-content">
          <div className="text-[#8dff8d]">
            <p>Spanish</p>
            <p>Chinese (Cantonese)</p>
            <p>Chinese (Mandarin)</p>
            <p>English</p>
          </div>
          </div>
      </section>

      <div className="section-divider"></div>
      <section id="hobbies" className="scroll-mt-20 max-w-3xl mx-auto">
        <h3 className="section-title">Hobbies</h3>
        <div className="section-content">
          <div className="text-[#8dff8d]">
            <p>Learning Godot</p>
            <p>Painting</p>
            <p>Baking</p>
            <p>Travelling</p>
          </div>
          </div>
      </section>
      
    </div>
  )
}

export default App
