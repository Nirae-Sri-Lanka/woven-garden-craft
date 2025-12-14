import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import processBundling from "@/assets/process-bundling.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-caption text-primary mb-4">About</p>
              <h1 className="heading-hero mb-8">
                The <span className="italic">Artisan</span>
              </h1>
              <p className="text-elegant text-muted-foreground">
                Behind every botanical print is a story of patience, discovery, 
                and a deep love for the natural world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={processBundling}
                  alt="Artisan at work with botanical dyes"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-elegant text-muted-foreground"
          >
            <p className="text-foreground text-2xl md:text-3xl font-display font-light leading-relaxed">
              I discovered eco-printing by accident—a forgotten bundle of fabric and leaves 
              left in my garden one rainy afternoon became the first piece I ever created.
            </p>

            <p>
              What started as curiosity quickly became an obsession. I spent years studying 
              the ancient art of natural dyeing, learning which plants yield which colors, 
              how the seasons affect the hues, and how to coax the most vibrant prints from 
              leaves and flowers.
            </p>

            <p>
              Today, I create one-of-a-kind garments that honor both traditional textile arts 
              and sustainable fashion. Each piece is a collaboration between my hands and 
              nature's infinite creativity—I may guide the process, but it's the plants that 
              create the final artwork.
            </p>

            <p>
              My studio is filled with bundles of dried leaves, jars of natural mordants, 
              and fabric waiting to be transformed. Every season brings new possibilities 
              as different plants come into their prime.
            </p>
          </motion.div>

          <div className="divider-botanical my-16" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="text-center">
              <p className="text-4xl font-display text-primary mb-2">7+</p>
              <p className="text-caption text-muted-foreground">Years Crafting</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-display text-primary mb-2">200+</p>
              <p className="text-caption text-muted-foreground">Pieces Created</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-display text-primary mb-2">50+</p>
              <p className="text-caption text-muted-foreground">Plant Varieties</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-caption text-primary mb-4">Values</p>
            <h2 className="heading-section">What I Believe</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainability",
                description: "Every dye comes from plants, every process minimizes waste. Fashion should nurture the earth, not deplete it."
              },
              {
                title: "Uniqueness",
                description: "No two pieces are alike because no two leaves are alike. Your garment is yours alone, a singular work of art."
              },
              {
                title: "Slow Craft",
                description: "Good things take time. Each piece requires days of careful work—there's no rushing the art of natural dyeing."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="heading-subsection mb-4">{value.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-section mb-6">Let's Connect</h2>
            <p className="text-elegant text-muted-foreground mb-10 max-w-xl mx-auto">
              I love hearing from people who appreciate slow fashion and natural artistry. 
              Whether you have questions or want to discuss a custom piece, reach out.
            </p>
            <Button variant="botanical" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
