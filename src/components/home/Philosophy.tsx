import { motion } from "framer-motion";
import fabricDyeing from "@/assets/fabric-dyeing.jpg";
import fabricSamples from "@/assets/fabric-samples.jpg";

const Philosophy = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-wide">
        {/* Main Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-caption text-primary mb-4">What is Natural Dye?</p>
            <h2 className="heading-section mb-8">
              Colour Made
              <br />
              <span className="italic">From Nature</span>
            </h2>
            
            <div className="space-y-6 text-elegant text-muted-foreground">
              <p>
                Natural dye is colour made from plants, roots, leaves, flowers, bark, 
                and other organic materials. Instead of using chemical dyes and synthetic 
                pigments, we extract colour directly from nature.
              </p>
              <p>
                These plant-based dyes create soft tones, gentle variations, and a natural 
                warmth that industrial colours cannot imitate. The fabric must soak, absorb, 
                rest, and react. The result is a colour that feels alive — rich, earthy, 
                and full of depth.
              </p>
            </div>

            <div className="divider-botanical !mx-0 mt-10 mb-6" />

            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-display text-primary">100%</p>
                <p className="text-sm text-muted-foreground font-body">Natural Dyes</p>
              </div>
              <div>
                <p className="text-3xl font-display text-primary">Zero</p>
                <p className="text-sm text-muted-foreground font-body">Chemicals</p>
              </div>
              <div>
                <p className="text-3xl font-display text-primary">Eco</p>
                <p className="text-sm text-muted-foreground font-body">Friendly</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={fabricDyeing}
                alt="Natural fabric dyeing process with plant-based colors"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-terracotta-light/30 -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-sage-light/30 -z-10" />
          </motion.div>
        </div>

        {/* Why Natural Dye Matters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-caption text-primary mb-4">Why It Matters</p>
          <h2 className="heading-section mb-6">Benefits of Natural Dye</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            {
              title: "Protects Environment",
              description: "Avoids harmful chemicals and reduces water pollution"
            },
            {
              title: "Safer for Artisans",
              description: "No toxic substances means healthier working conditions"
            },
            {
              title: "Sustainable Fashion",
              description: "Supports eco-conscious choices and mindful consumption"
            },
            {
              title: "Preserves Tradition",
              description: "Keeps ancient craft techniques alive and valued"
            }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-cream-dark/50 rounded-sm"
            >
              <div className="w-12 h-px bg-primary mx-auto mb-4" />
              <h3 className="heading-subsection mb-3">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Each Piece is Unique */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={fabricSamples}
                alt="Unique natural dye fabric samples"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-caption text-primary mb-4">One of a Kind</p>
            <h2 className="heading-section mb-8">
              Why Each Piece
              <br />
              <span className="italic">Is Unique</span>
            </h2>
            
            <div className="space-y-6 text-elegant text-muted-foreground">
              <p>
                No two natural dyes ever look exactly the same. The plant material 
                changes with the seasons. The temperature of the water shifts the shade. 
                The sunlight, the timing, the hand movements — everything creates small differences.
              </p>
              <p className="text-lg font-display text-foreground italic">
                These variations are not flaws. They are the identity of the garment.
              </p>
              <p>
                Every Niraé piece is one-of-a-kind because nature herself designs the final colour.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
