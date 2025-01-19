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
        className="scroll-mt-20 max-w-3xl mx-auto"
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
                title="Programming" 
                skills={[
                  { name: "Go", type: "keyword" },
                  { name: "JavaScript", type: "keyword" },
                  { name: "TypeScript", type: "keyword" },
                  { name: "Python", type: "keyword" },
                  { name: "HTML5", type: "string" },
                  { name: "SCSS", type: "string" },
                  { name: "CSS", type: "string" }
                ]}
              />
              <SkillCard 
                title="Databases" 
                skills={[
                  { name: "Postgres", type: "function" },
                  { name: "DynamoDB", type: "function" },
                  { name: "SQL", type: "keyword" }
                ]}
              />
              <SkillCard 
                title="Frameworks" 
                skills={[
                  { name: "ReactJS", type: "function" },
                  { name: "Redux", type: "function" },
                  { name: "Hugo", type: "function" }
                ]}
              />
              <SkillCard 
                title="Infrastructure & DevOps" 
                skills={[
                  { name: "AWS", type: "keyword" },
                  { name: "S3", type: "function" },
                  { name: "Docker", type: "function" },
                  { name: "Kafka", type: "function" },
                  { name: "SQS", type: "function" },
                  { name: "Buildkite", type: "function" },
                  { name: "Kubernetes", type: "function" }
                ]}
              />
              <SkillCard 
                title="Monitoring" 
                skills={[
                  { name: "Prometheus", type: "function" },
                  { name: "Grafana", type: "function" },
                  { name: "Kibana", type: "function" }
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
