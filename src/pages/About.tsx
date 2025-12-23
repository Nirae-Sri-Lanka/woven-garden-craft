import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import fabricDelicate from "@/assets/fabric-delicate.jpg";
import fabricStack from "@/assets/fabric-stack.jpg";

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
              <p className="text-caption text-primary mb-4">About Us</p>
              <h1 className="heading-hero mb-8">
                <span className="italic">Niraé</span>
              </h1>
              <p className="text-elegant text-muted-foreground mb-6">
                Niraé is a handmade clothing brand built on slow craft, natural dye, 
                and mindful creation.
              </p>
              <p className="text-elegant text-muted-foreground">
                Every piece begins with fabric, plants, and the patience required to 
                let nature shape colour. We believe clothing should carry meaning, 
                not just trends.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={fabricDelicate}
                  alt="Delicate naturally dyed fabrics by Niraé"
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
              We choose methods that respect the earth and honour traditional dyeing techniques.
            </p>

            <p>
              Our work is small-scale and intentional. Each garment is touched by human hands 
              from start to finish — preparing the fabric, creating colour from plants, dyeing, 
              washing, and stitching. This slow process is our signature.
            </p>

            <p>
              It is what makes Niraé different: honest, handcrafted, and naturally beautiful.
            </p>

            <p>
              We create for people who appreciate individuality, sustainability, and the quiet 
              elegance of natural colour. Niraé is not just clothing — it is a reminder that 
              artistry still exists in the details.
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
              <p className="text-4xl font-display text-primary mb-2">Hand</p>
              <p className="text-caption text-muted-foreground">Crafted</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-display text-primary mb-2">Plant</p>
              <p className="text-caption text-muted-foreground">Based Dyes</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-display text-primary mb-2">Slow</p>
              <p className="text-caption text-muted-foreground">Fashion</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collections Philosophy */}
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
                  src={fabricStack}
                  alt="Stack of naturally dyed fabrics showing color variations"
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
              <p className="text-caption text-primary mb-4">Our Collections</p>
              <h2 className="heading-section mb-8">
                Each Collection
                <br />
                <span className="italic">Is a Chapter</span>
              </h2>
              
              <div className="space-y-6 text-elegant text-muted-foreground">
                <p>
                  Our collections are developed slowly and intentionally, guided by concept, 
                  material, and craft rather than trends. Every design begins with research — 
                  into natural dye sources, fabric behaviour, cultural references, and form.
                </p>
                <p>
                  Natural dyes play a defining role. Because colours are derived from plants 
                  and traditional processes, no two dye lots are ever exactly the same. Subtle 
                  variations in tone and texture are embraced as part of the design language.
                </p>
                <p>
                  Collections are released in limited quantities, encouraging thoughtful 
                  consumption and long-term wear rather than fast replacement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-caption text-primary mb-4">Values</p>
            <h2 className="heading-section">What We Believe</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainability",
                description: "Every dye comes from plants, every process minimizes waste. Fashion should nurture the earth, not deplete it."
              },
              {
                title: "Uniqueness",
                description: "No two pieces are alike because no two dye lots are alike. Your garment is yours alone, a singular work of art."
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
                className="text-center p-8 bg-cream-dark/50"
              >
                <div className="w-12 h-px bg-primary mx-auto mb-6" />
                <h3 className="heading-subsection mb-4">{value.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream-dark">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-section mb-6">Let's Connect</h2>
            <p className="text-elegant text-muted-foreground mb-10 max-w-xl mx-auto">
              We love hearing from people who appreciate slow fashion and natural artistry. 
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
