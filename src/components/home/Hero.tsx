import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/fabric-delicate.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Naturally dyed handcrafted fabrics by Niraé"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-terracotta/20 blur-3xl"
      />

      {/* Content */}
      <div className="relative container-wide py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "3rem" }}
            transition={{ duration: 0.8 }}
            className="h-px bg-primary mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-caption text-primary mb-6"
          >
            Natural Dye · Handmade Craft · Slow Creation
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="heading-hero mb-8"
          >
            Welcome to
            <br />
            <span className="italic text-primary">Niraé</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-elegant text-muted-foreground mb-6 max-w-lg"
          >
            Where natural dye, handmade craft, and slow creation come together. 
            Every piece is made with care, coloured by plants, and shaped by human hands.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg font-display italic text-primary/80 mb-10 max-w-lg"
          >
            You're invited to explore the world behind our work — honest, sustainable, and beautifully unique.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/process">Discover Our Craft</Link>
            </Button>
            <Button variant="elegant" size="xl" asChild>
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
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-foreground/0 via-foreground/50 to-foreground/0"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
