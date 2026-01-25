import { motion } from "framer-motion";
import dyeingProcess1 from "@/assets/dyeing-process-1.jpg";
import dyeingProcess2 from "@/assets/dyeing-process-2.jpg";

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

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-terracotta/20 rounded-2xl transform rotate-3 group-hover:rotate-1 transition-transform duration-500" />
            <img
              src={dyeingProcess1}
              alt="Fabrics soaking in natural dye bath"
              className="relative rounded-2xl shadow-elegant w-full aspect-[3/4] object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <p className="font-display font-semibold text-foreground">Dye Bath</p>
              <p className="text-sm text-foreground/70">Fabrics absorbing natural colors</p>
            </div>
          </motion.div>

          {/* Center Video */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:col-span-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-glow bg-foreground/5">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[9/16] object-cover"
                poster={dyeingProcess1}
              >
                <source src="/1000213615.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Video overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent pointer-events-none" />
              {/* Play indicator */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <p className="font-display font-semibold text-foreground">The Art of Natural Dyeing</p>
                  <p className="text-sm text-foreground/70">Watch our process in action</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-primary/20 rounded-2xl transform -rotate-3 group-hover:-rotate-1 transition-transform duration-500" />
            <img
              src={dyeingProcess2}
              alt="Naturally dyed pink and coral fabrics"
              className="relative rounded-2xl shadow-elegant w-full aspect-[3/4] object-cover"
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
