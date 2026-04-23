import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle.jsx';
import CardGrid, { Card } from './CardGrid.jsx';

const Languages = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <motion.section
        id="languages"
        className="scroll-mt-20 max-w-3xl mx-auto section-panel"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle>Spoken Languages</SectionTitle>
        <div className="section-content">
          <CardGrid className="text-[#8dff8d]">
            <Card
              emoji="🇬🇧"
              title={<span className="keyword">English</span>}
              subtitle="Professional proficiency"
            />
            <Card
              emoji="🇪🇸"
              title={<span className="keyword">Spanish</span>}
              subtitle="Native proficiency"
            />
            <Card
              emoji="🇨🇳"
              title={<><span className="function">Chinese</span> (<span className="string">Cantonese</span>)</>}
              subtitle="Native proficiency"
            />
            <Card
              emoji="🇨🇳"
              title={<><span className="function">Chinese</span> (<span className="string">Mandarin</span>)</>}
              subtitle="Native proficiency"
            />
          </CardGrid>
        </div>
      </motion.section>
    </div>
  );
};

export default Languages
