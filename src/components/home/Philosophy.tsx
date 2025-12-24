import { motion } from "framer-motion";
import fabricDyeing from "@/assets/fabric-dyeing.jpg";
import fabricSamples from "@/assets/fabric-samples.jpg";
import colorSamples from "@/assets/color-samples.jpg";

const Philosophy = () => {
  return (
    <section className="section-padding overflow-hidden bg-background">
      <div className="container-wide">
        {/* Main Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-caption text-primary mb-4">What is Natural Dye?</p>
            <h2 className="heading-section text-foreground mb-8">
              Colour Made
              <br />
              <span className="italic text-primary">From Nature</span>
            </h2>
            
            <div className="space-y-6 text-elegant text-foreground/80">
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

            <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-ochre my-10" />

            <div className="grid grid-cols-3 gap-8">
              {[
                { value: "100%", label: "Natural Dyes" },
                { value: "Zero", label: "Chemicals" },
                { value: "Eco", label: "Friendly" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-4xl font-display font-semibold text-primary">{stat.value}</p>
                  <p className="text-sm text-foreground/70 font-body font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden shadow-elevated rounded-sm">
              <img
                src={fabricDyeing}
                alt="Natural fabric dyeing process with plant-based colors"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -left-8 w-40 h-48 overflow-hidden shadow-elevated rounded-sm border-4 border-background"
            >
              <img
                src={colorSamples}
                alt="Natural dye color variations"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-sage/20 to-transparent rounded-full blur-2xl -z-10" />
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
          <h2 className="heading-section text-foreground mb-6">Benefits of Natural Dye</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {[
            {
              title: "Protects Environment",
              description: "Avoids harmful chemicals and reduces water pollution",
              icon: "🌿"
            },
            {
              title: "Safer for Artisans",
              description: "No toxic substances means healthier working conditions",
              icon: "🤲"
            },
            {
              title: "Sustainable Fashion",
              description: "Supports eco-conscious choices and mindful consumption",
              icon: "♻️"
            },
            {
              title: "Preserves Tradition",
              description: "Keeps ancient craft techniques alive and valued",
              icon: "🏺"
            }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 bg-card rounded-sm border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-500"
            >
              <span className="text-3xl mb-4 block">{benefit.icon}</span>
              <div className="w-8 h-0.5 bg-primary/40 group-hover:bg-primary group-hover:w-12 transition-all duration-300 mb-4" />
              <h3 className="heading-subsection text-foreground mb-3">{benefit.title}</h3>
              <p className="text-base text-foreground/70 font-body leading-relaxed">{benefit.description}</p>
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
            <div className="aspect-[4/3] overflow-hidden relative shadow-elevated rounded-sm">
              <img
                src={fabricSamples}
                alt="Unique natural dye fabric samples"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/30 to-transparent" />
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
            <h2 className="heading-section text-foreground mb-8">
              Why Each Piece
              <br />
              <span className="italic text-primary">Is Unique</span>
            </h2>
            
            <div className="space-y-6 text-elegant text-foreground/80">
              <p>
                No two natural dyes ever look exactly the same. The plant material 
                changes with the seasons. The temperature of the water shifts the shade. 
                The sunlight, the timing, the hand movements — everything creates small differences.
              </p>
              <p className="text-xl font-display font-semibold text-foreground italic border-l-4 border-primary pl-6 py-2">
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
