import { motion } from "framer-motion";
import dyeingProcess1 from "@/assets/dyeing-process-1.jpg";
import dyeingProcess2 from "@/assets/dyeing-process-2.jpg";
import fabricCollectionNew from "@/assets/fabric-collection-new.jpg";

const VideoShowcase = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-cream-dark to-cream">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-terracotta/5 via-transparent to-sage/10 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-caption text-primary mb-4">Behind the Scenes</p>
          <h2 className="heading-section text-foreground mb-6">Watch the Magic Unfold</h2>
          <p className="text-elegant text-foreground/75 max-w-2xl mx-auto">
            Experience the meditative art of natural dyeing — from gathering botanicals 
            to revealing one-of-a-kind patterns. Each piece tells its own story.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* First Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-terracotta/20 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500" />
            <img
              src={dyeingProcess1}
              alt="Fabrics soaking in natural dye bath"
              className="relative rounded-2xl shadow-elegant w-full aspect-[4/5] object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <p className="font-display font-semibold text-foreground">Dye Bath</p>
              <p className="text-sm text-foreground/70">Fabrics absorbing natural colors</p>
            </div>
          </motion.div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ochre/20 to-sage/20 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
            <img
              src={fabricSamples}
              alt="Collection of naturally dyed fabric samples"
              className="relative rounded-2xl shadow-elegant w-full aspect-[4/5] object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <p className="font-display font-semibold text-foreground">Fabric Collection</p>
              <p className="text-sm text-foreground/70">Curated natural textures</p>
            </div>
          </motion.div>

          {/* Third Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-primary/20 rounded-2xl transform -rotate-2 group-hover:-rotate-1 transition-transform duration-500" />
            <img
              src={dyeingProcess2}
              alt="Naturally dyed pink and coral fabrics"
              className="relative rounded-2xl shadow-elegant w-full aspect-[4/5] object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <p className="font-display font-semibold text-foreground">Color Reveal</p>
              <p className="text-sm text-foreground/70">Beautiful natural pink tones</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
