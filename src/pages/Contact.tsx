import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/niraedesigns", icon: Instagram },
  { name: "Facebook", url: "https://facebook.com/niraedesigns", icon: Facebook },
  { name: "TikTok", url: "https://tiktok.com/@niraedesigns", icon: MessageCircle },
  { name: "YouTube", url: "https://youtube.com/@niraedesigns", icon: Youtube },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-caption text-primary mb-4">Contact Us</p>
            <h1 className="heading-hero mb-8">
              Get in <span className="italic">Touch</span>
            </h1>
            <p className="text-elegant text-muted-foreground">
              We'd love to hear from you. For orders, custom enquiries, collaborations, 
              or general questions, feel free to reach out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Main Contact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h3 className="heading-subsection mb-4">Email</h3>
                <a 
                  href="mailto:niraeofficial@gmail.com" 
                  className="text-xl font-body text-foreground hover:text-primary transition-colors"
                >
                  niraeofficial@gmail.com
                </a>
              </div>

              <div>
                <h3 className="heading-subsection mb-4">WhatsApp</h3>
                <a 
                  href="https://wa.me/94704220203" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-body text-foreground hover:text-primary transition-colors"
                >
                  +94 70 422 0203
                </a>
              </div>

              <div>
                <h3 className="heading-subsection mb-4">Location</h3>
                <p className="text-xl font-body text-muted-foreground">
                  Sri Lanka
                </p>
              </div>

              <div>
                <h3 className="heading-subsection mb-6">Follow Along</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                      >
                        <IconComponent className="w-5 h-5 text-primary" />
                        <span className="font-body text-muted-foreground group-hover:text-foreground transition-colors">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="p-8 bg-cream-dark rounded-lg">
                <h3 className="heading-subsection mb-4">Custom Orders</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Interested in a custom piece? We take on select commissions throughout 
                  the year. Share your vision via email or WhatsApp and we'll let you 
                  know what's possible.
                </p>
                <p className="text-sm text-primary font-body">
                  Each piece is made to order
                </p>
              </div>

              <div className="p-8 bg-cream-dark rounded-lg">
                <h3 className="heading-subsection mb-4">Collaborations</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  We're open to collaborations with fellow artisans, boutiques, and 
                  sustainable fashion advocates. Let's create something beautiful together.
                </p>
                <p className="text-sm text-primary font-body">
                  Reach out via email
                </p>
              </div>

              <div className="p-8 bg-cream-dark rounded-lg">
                <h3 className="heading-subsection mb-4">Limited Quantities</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Our collections are released in limited quantities, encouraging thoughtful 
                  consumption and long-term wear rather than fast replacement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thank You Message */}
      <section className="section-padding bg-cream-dark">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-px bg-primary mx-auto mb-8" />
            <h2 className="heading-section mb-6">Thank You</h2>
            <p className="text-elegant text-muted-foreground max-w-xl mx-auto mb-4">
              Thank you for supporting slow fashion and conscious craft.
            </p>
            <p className="text-lg font-display italic text-primary/80">
              When you choose Niraé, you choose clothing that respects the planet 
              and celebrates craftsmanship.
            </p>
          </motion.div>
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
            <h2 className="heading-section mb-6">Explore Our Work</h2>
            <p className="text-elegant text-muted-foreground mb-10 max-w-xl mx-auto">
              See our collection of naturally dyed pieces and learn more about our process.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="botanical" size="lg" asChild>
                <Link to="/gallery">View Gallery</Link>
              </Button>
              <Button variant="elegant" size="lg" asChild>
                <Link to="/process">See Process</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
