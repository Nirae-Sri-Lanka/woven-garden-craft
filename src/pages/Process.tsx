import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import processGathering from "@/assets/process-gathering.jpg";
import processBundling from "@/assets/process-bundling.jpg";
import processReveal from "@/assets/process-reveal.jpg";
import processSewing from "@/assets/process-sewing.jpg";
import colorOutcomes from "@/assets/color-outcomes.jpg";

const processSteps = [
  {
    number: "01",
    title: "Gathering from Nature",
    description: "Each piece begins with a walk through gardens and forests. I collect eucalyptus leaves, fern fronds, rose petals, and other botanicals—each chosen for their unique ability to transfer color and pattern onto fabric.",
    image: processGathering,
    details: ["Seasonal foraging", "Local & sustainable sources", "Each leaf hand-selected"]
  },
  {
    number: "02", 
    title: "Preparing & Bundling",
    description: "The fabric is first mordanted—a process that helps it accept the plant dyes. Then comes the meditative work of laying each leaf and flower exactly where I want the print to appear, before bundling everything tightly.",
    image: processBundling,
    details: ["Natural mordants only", "Intuitive leaf placement", "Tightly rolled bundles"]
  },
  {
    number: "03",
    title: "The Reveal",
    description: "After hours of steaming, comes the magic moment—unwrapping each bundle to discover what nature has created. Every piece is a surprise, with colors and patterns I could never fully predict.",
    image: processReveal,
    details: ["Steam for 2-4 hours", "Each result unique", "Nature's own palette"]
  },
  {
    number: "04",
    title: "Crafting the Garment",
    description: "With the printed fabric now dry and cured, I cut and sew each garment by hand. Every stitch is intentional, creating wearable art that honors both the fabric and the plants that colored it.",
    image: processSewing,
    details: ["Hand-cut patterns", "Artisan stitching", "One-of-a-kind pieces"]
  }
];

const Process = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-caption text-primary mb-4">The Craft</p>
            <h1 className="heading-hero mb-8">
              My <span className="italic">Process</span>
            </h1>
            <p className="text-elegant text-muted-foreground">
              Creating each piece is a slow, intentional journey from nature to garment. 
              There's no rushing eco-printing—it unfolds on its own timeline, 
              guided by the plants and the seasons.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      {processSteps.map((step, index) => (
        <section 
          key={step.number} 
          className={`section-padding ${index % 2 === 1 ? 'bg-cream-dark' : ''}`}
        >
          <div className="container-wide">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-dense' : ''
            }`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? 'lg:col-start-2' : ''}
              >
                <p className="text-6xl font-display text-primary/20 mb-4">{step.number}</p>
                <h2 className="heading-section mb-6">{step.title}</h2>
                <p className="text-elegant text-muted-foreground mb-8">{step.description}</p>
                
                <ul className="space-y-3">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-muted-foreground font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Color Outcomes */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={colorOutcomes}
                  alt="Various natural dye color outcomes"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-caption text-primary mb-4">The Palette</p>
              <h2 className="heading-section mb-6">Nature's Colors</h2>
              <p className="text-elegant text-muted-foreground mb-8">
                Different plants yield different colors—eucalyptus gives terracotta and rust, 
                while oak leaves produce soft grays and blues. The same plant can even create 
                different hues depending on the season, the soil, and the mordant used.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="w-full h-3 bg-terracotta mb-2 rounded-full" />
                  <p className="text-sm font-body text-muted-foreground">Eucalyptus</p>
                </div>
                <div>
                  <div className="w-full h-3 bg-sage mb-2 rounded-full" />
                  <p className="text-sm font-body text-muted-foreground">Fern</p>
                </div>
                <div>
                  <div className="w-full h-3 bg-rust mb-2 rounded-full" />
                  <p className="text-sm font-body text-muted-foreground">Oak</p>
                </div>
                <div>
                  <div className="w-full h-3 bg-ochre mb-2 rounded-full" />
                  <p className="text-sm font-body text-muted-foreground">Onion Skin</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Process;
