import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle.jsx'
import SectionDivider from './SectionDivider.jsx'
import SkillCard from './SkillCard.jsx'

const Skills = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <SectionDivider />
      <motion.section 
        id="skills" 
        className="scroll-mt-20 max-w-3xl mx-auto section-panel"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle>Skills</SectionTitle>
        <div className="section-content">
          <div className="text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard 
                title="Languages & Frameworks" 
                skills={[
                  { name: "Go", type: "keyword" },
                  { name: "TypeScript", type: "keyword" },
                  { name: "JavaScript", type: "keyword" },
                  { name: "GraphQL", type: "function" },
                  { name: "gRPC", type: "function" },
                  { name: "Node.js", type: "function" }
                ]}
              />
              <SkillCard 
                title="Databases" 
                skills={[
                  { name: "PostgreSQL", type: "function" },
                  { name: "DynamoDB", type: "function" },
                  { name: "MongoDB", type: "function" }
                ]}
              />
              <SkillCard 
                title="Infrastructure & Tools" 
                skills={[
                  { name: "AWS", type: "keyword" },
                  { name: "EKS", type: "function" },
                  { name: "Lambda", type: "function" },
                  { name: "SQS", type: "function" },
                  { name: "Kubernetes", type: "function" },
                  { name: "Docker", type: "function" }
                ]}
              />
              <SkillCard 
                title="Eventing & Data Flow" 
                skills={[
                  { name: "Kafka", type: "function" },
                  { name: "NATS", type: "function" },
                  { name: "Redis", type: "function" }
                ]}
              />
              <SkillCard 
                title="Engineering Leadership" 
                skills={[
                  { name: "Grafana", type: "function" },
                  { name: "On-call Ownership", type: "string" },
                  { name: "RFC Authoring", type: "string" },
                  { name: "Stakeholder Management", type: "string" }
                ]}
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Skills
