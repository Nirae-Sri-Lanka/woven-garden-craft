import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <p className="text-caption text-primary-foreground/70 mb-3">Experience the Process</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
              Crafted by Hand
            </h2>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-glow">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-video object-cover"
            >
              <source src="/1000213615.mp4" type="video/mp4" />
            </video>
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent pointer-events-none" />
          </div>
          
          <p className="text-center text-primary-foreground/60 mt-6 text-sm">
            Watch the art of natural dyeing come to life
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
