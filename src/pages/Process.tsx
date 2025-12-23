import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import fabricMordant from "@/assets/fabric-mordant.jpg";
import fabricDyeing from "@/assets/fabric-dyeing.jpg";
import fabricDelicate from "@/assets/fabric-delicate.jpg";
import fabricStack from "@/assets/fabric-stack.jpg";
import fabricSamples from "@/assets/fabric-samples.jpg";

const processSteps = [
  {
    number: "01",
    title: "Preparing the Fabric",
    description: "The journey begins with careful preparation. Each fabric is scoured and mordanted — a process using natural fixatives like alum or iron that helps the fabric accept and hold the plant dyes permanently.",
    image: fabricMordant,
    details: ["Natural mordants only", "Hours of soaking time", "Each fabric type treated differently"]
  },
  {
    number: "02", 
    title: "Creating Natural Colour",
    description: "We extract colour directly from plants, roots, leaves, flowers, and bark. Each dye bath is carefully prepared, with temperatures and timing adjusted to achieve the perfect shade. This slow method creates colours that feel alive.",
    image: fabricDyeing,
    details: ["Plant-based dyes only", "Temperature controlled", "Multiple dye baths for depth"]
  },
  {
    number: "03",
    title: "The Dyeing Process",
    description: "The fabric is immersed in the natural dye bath. The material must soak, absorb, rest, and react. Different plants yield different colours — soft tones, gentle variations, and natural warmth that synthetic dyes cannot imitate.",
    image: fabricDelicate,
    details: ["Slow absorption process", "Natural colour development", "Each result unique"]
  },
  {
    number: "04",
    title: "Crafting the Garment",
    description: "With the dyed fabric now cured and ready, we cut and sew each garment by hand. Every stitch is intentional, creating wearable art that honours both the fabric and the plants that coloured it.",
    image: fabricStack,
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
              Our <span className="italic">Process</span>
            </h1>
            <p className="text-elegant text-muted-foreground mb-6">
              Natural dyeing is a slow method. There's no rushing this art — it unfolds 
              on its own timeline, guided by the plants and the seasons.
            </p>
            <p className="text-lg font-display italic text-primary/80">
              This slow process is our signature. It is what makes Niraé different.
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
                  src={fabricSamples}
                  alt="Various natural dye color samples showing seasonal variations"
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
              <h2 className="heading-section mb-6">Nature's Colours</h2>
              <p className="text-elegant text-muted-foreground mb-6">
                The plant material changes with the seasons. The temperature of the water 
                shifts the shade. The sunlight, the timing, the hand movements — everything 
                creates small differences.
              </p>
              <p className="text-lg font-display italic text-foreground mb-8">
                These variations are not flaws. They are the identity of the garment.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="w-full h-3 bg-terracotta mb-2 rounded-full" />
                  <p className="text-sm font-body text-muted-foreground">Madder Root</p>
                </div>
                <div>
                  <div className="w-full h-3 bg-sage mb-2 rounded-full" />
                  <p className="text-sm font-body text-muted-foreground">Indigo Leaves</p>
                </div>
                <div>
                  <div className="w-full h-3 bg-rust mb-2 rounded-full" />
                  <p className="text-sm font-body text-muted-foreground">Iron Mordant</p>
                </div>
                <div>
                  <div className="w-full h-3 bg-ochre mb-2 rounded-full" />
                  <p className="text-sm font-body text-muted-foreground">Turmeric</p>
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
