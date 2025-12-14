import { motion } from "framer-motion";
import colorOutcomes from "@/assets/color-outcomes.jpg";

const Philosophy = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-caption text-primary mb-4">Philosophy</p>
            <h2 className="heading-section mb-8">
              Slow Fashion,
              <br />
              <span className="italic">Natural Beauty</span>
            </h2>
            
            <div className="space-y-6 text-elegant text-muted-foreground">
              <p>
                Each garment I create is a meditation on patience. The colors you see 
                aren't dyed—they're gifts from the plants themselves, extracted through 
                steam and time.
              </p>
              <p>
                Terracotta from eucalyptus, sage from ferns, golden ochre from onion skins. 
                No two pieces are ever the same, because nature never repeats herself exactly.
              </p>
              <p>
                This is clothing that carries stories—of the seasons when leaves were gathered, 
                of the slow process of creation, of a commitment to sustainability and craft.
              </p>
            </div>

            <div className="divider-botanical !mx-0 mt-10 mb-6" />

            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-display text-primary">100%</p>
                <p className="text-sm text-muted-foreground font-body">Natural Dyes</p>
              </div>
              <div>
                <p className="text-3xl font-display text-primary">One</p>
                <p className="text-sm text-muted-foreground font-body">Of a Kind</p>
              </div>
              <div>
                <p className="text-3xl font-display text-primary">Hand</p>
                <p className="text-sm text-muted-foreground font-body">Sewn</p>
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
                src={colorOutcomes}
                alt="Natural dye color outcomes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-terracotta-light/30 -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-sage-light/30 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
