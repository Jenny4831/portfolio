import Timeline from './Timeline.jsx'
import SideNav from './components/SideNav.jsx'

function App() {
  return (
    <div className="relative max-w-7xl mx-auto px-8 py-16 text-center min-h-screen flex flex-col justify-center pl-72">
      <SideNav />
      <div className="code-bg"></div>
      <div className="relative z-10 transform perspective-1000 rotate-x-3 rotate-y-2">
      <h1 className="text-5xl font-bold text-[#8dff8d] mb-6 animate-fadeIn leading-tight tracking-tight terminal-text">
        Naimen (Jenny) Zhen Liang<span className="cursor"></span>
      </h1>
      <h2 className="text-2xl text-[#8dff8d]/60 font-normal mb-16 animate-fadeIn tracking-tight terminal-text">
        Senior Software Engineer<span className="cursor"></span>
      </h2>
      <div className="max-w-3xl mx-auto my-16 p-12 bg-[#252526] rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-[#3c3c3c] animate-fadeUp transform transition-all hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]">
        <p className="text-lg text-blue-400 leading-relaxed terminal-text">
          Senior Software Engineer with extensive experience driving technical innovation
          and delivering complex projects. Expertise in architecting and scaling distributed
          systems, optimizing performance, and implementing security-first solutions.
          
          - Led the enhancement of the billing system to support enterprise customers: collaborated with finance team on requirements, selected billing providers, designed system architecture with migration plan, and managed cross-functional implementation while maintaining regular stakeholder updates. Successfully unlocked enterprise contracts and custom billing models.
          
          - Designed and developed the core architecture for the company's internal tooling platform that equips customer support and GTM teams with essential tools to manage customer inquiries and execute operations on customer's account. Built with scalability in mind, the platform allows domain teams to extend functionality with custom tooling, boosting support for customer-facing teams. This initiative reduced reliance on scripts, enhanced traceability of actions taken against customer accounts, and introduced granular permission controls for features provided by different teams, ultimately increasing security, visibility, and reliability.
          
          - Implemented and optimized sales order process with Salesforce synchronization, boosting sales team efficiency and productivity.
          
          - Designed and built a real-time, event-based customer activity logging system. The system features a flexible architecture that integrates seamlessly with both legacy and modern services, enabling simple adoption by different teams. Customers can now monitor their users' activities in real-time, improving transparency and accountability.
          
          - Took a key role in managing the backend community, promoting a culture of knowledge sharing through engineers' expertise and developing comprehensive, hands-on workshops to elevate skills across diverse topics.
          
          - Actively involved in guiding interns, participating in mentorship, and representing the company at university career fairs and various activities.
          
          - Led the seamless migration of legacy users, enabling the rollout of new features across various domains and the retirement of outdated plans. Collaborated closely with product, marketing, and support teams to ensure effective communication with customers and smooth execution of each rollout stage. This migration enhanced product accessibility for legacy users, resulting in a 10% increase in trial conversions.
          
          - Implemented data retention strategies to ensure compliance with GDPR regulations. Worked closely with data store team, to be able to set up ground work, such that other teams can follow an example.
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
