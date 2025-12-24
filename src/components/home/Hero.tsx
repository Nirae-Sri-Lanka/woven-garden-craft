import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/fabric-delicate.jpg";
import colorSamples from "@/assets/color-samples.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with enhanced overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Naturally dyed handcrafted fabrics by Niraé"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth/95 via-earth/85 to-earth/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-earth/60 via-transparent to-transparent" />
      </div>

      {/* Decorative floating elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-terracotta/30 blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-ochre/30 blur-[80px]"
      />

      {/* Floating image accent */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-32 right-20 hidden lg:block"
      >
        <div className="relative">
          <img
            src={colorSamples}
            alt="Natural dye color samples"
            className="w-64 h-80 object-cover shadow-elevated rounded-sm"
          />
          <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-terracotta-light/40 rounded-sm -z-10" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative container-wide py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "4rem" }}
            transition={{ duration: 0.8 }}
            className="h-0.5 bg-gradient-to-r from-terracotta to-ochre mb-10"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-caption text-terracotta-light mb-6"
          >
            Natural Dye · Handmade Craft · Slow Creation
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="heading-hero text-cream mb-8"
          >
            Welcome to
            <br />
            <span className="italic bg-gradient-to-r from-terracotta-light to-ochre bg-clip-text text-transparent">Niraé</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-elegant text-cream/85 mb-6 max-w-lg"
          >
            Where natural dye, handmade craft, and slow creation come together. 
            Every piece is made with care, coloured by plants, and shaped by human hands.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl font-display italic text-terracotta-light mb-12 max-w-lg"
          >
            You're invited to explore the world behind our work — honest, sustainable, and beautifully unique.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="hero" size="xl" asChild className="bg-terracotta hover:bg-rust text-cream shadow-glow">
              <Link to="/process">Discover Our Craft</Link>
            </Button>
            <Button variant="elegant" size="xl" asChild className="border-cream/40 text-cream hover:bg-cream/10 hover:border-cream">
              <Link to="/gallery">View Collection</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-cream/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-cream/0 via-cream/60 to-cream/0"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
