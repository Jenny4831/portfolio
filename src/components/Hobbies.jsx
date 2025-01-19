import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle.jsx';
import SectionDivider from './SectionDivider.jsx';
import CardGrid, { Card } from './CardGrid.jsx';

const Hobbies = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <SectionDivider />
      <motion.section
        id="hobbies"
        className="scroll-mt-20 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle>Hobbies</SectionTitle>
        <div className="section-content">
          <CardGrid className="text-[#8dff8d]">
            <Card
              emoji="🎮"
              title={<><span className="function">Learning</span> <span className="string">Godot</span></>}
              subtitle="Creating a 2D pixel game"
            />
            <Card
              emoji="🎨"
              title={<span className="keyword">Painting</span>}
              subtitle="Trying all kinds of medium"
            />
            <Card
              emoji="🍰"
              title={<span className="keyword">Baking</span>}
              subtitle="Making the same cake in different shapes"
            />
            <Card
              emoji="✈️"
              title={<span className="function">Travelling</span>}
              subtitle="Good views, good food and good fun"
            />
          </CardGrid>
        </div>
      </motion.section>
    </div>
  );
};

export default Hobbies;
