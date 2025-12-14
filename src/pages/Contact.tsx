import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/botanicalthreads", icon: "📷" },
  { name: "Facebook", url: "https://facebook.com/botanicalthreads", icon: "📘" },
  { name: "TikTok", url: "https://tiktok.com/@botanicalthreads", icon: "🎵" },
  { name: "YouTube", url: "https://youtube.com/@botanicalthreads", icon: "▶️" },
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
            <p className="text-caption text-primary mb-4">Contact</p>
            <h1 className="heading-hero mb-8">
              Get in <span className="italic">Touch</span>
            </h1>
            <p className="text-elegant text-muted-foreground">
              Whether you're interested in a custom piece, have questions about my process, 
              or just want to say hello—I'd love to hear from you.
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
                  href="mailto:hello@botanicalthreads.com" 
                  className="text-xl font-body text-foreground hover:text-primary transition-colors"
                >
                  hello@botanicalthreads.com
                </a>
              </div>

              <div>
                <h3 className="heading-subsection mb-4">Phone</h3>
                <a 
                  href="tel:+1234567890" 
                  className="text-xl font-body text-foreground hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>

              <div>
                <h3 className="heading-subsection mb-4">Location</h3>
                <p className="text-xl font-body text-muted-foreground">
                  Athens, Greece
                </p>
              </div>

              <div>
                <h3 className="heading-subsection mb-6">Follow Along</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <span className="font-body text-muted-foreground group-hover:text-foreground transition-colors">
                        {social.name}
                      </span>
                    </a>
                  ))}
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
                  Interested in a custom piece? I take on select commissions throughout 
                  the year. Share your vision via email or social media and I'll let you 
                  know what's possible.
                </p>
                <p className="text-sm text-primary font-body">
                  Typical turnaround: 4-8 weeks
                </p>
              </div>

              <div className="p-8 bg-cream-dark rounded-lg">
                <h3 className="heading-subsection mb-4">Workshops</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                  Want to learn eco-printing yourself? I occasionally host small group 
                  workshops. Follow me on social media for announcements.
                </p>
                <p className="text-sm text-primary font-body">
                  Check Instagram for upcoming dates
                </p>
              </div>

              <div className="p-8 bg-cream-dark rounded-lg">
                <h3 className="heading-subsection mb-4">Response Time</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  I typically respond within 2-3 business days. During busy seasons 
                  or when I'm deep in a project, it may take a bit longer. Thank you 
                  for your patience!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-section mb-12">Common Questions</h2>
            
            <div className="space-y-8 text-left max-w-2xl mx-auto">
              <div>
                <h4 className="heading-subsection mb-2">How long does a custom piece take?</h4>
                <p className="text-muted-foreground font-body">
                  Depending on complexity and my current workload, custom pieces typically take 4-8 weeks from commission to completion.
                </p>
              </div>
              
              <div>
                <h4 className="heading-subsection mb-2">Do the colors fade?</h4>
                <p className="text-muted-foreground font-body">
                  With proper care, the botanical dyes remain vibrant for years. I include care instructions with every piece.
                </p>
              </div>
              
              <div>
                <h4 className="heading-subsection mb-2">Do you ship internationally?</h4>
                <p className="text-muted-foreground font-body">
                  Yes! I ship worldwide. Shipping costs and times vary by destination.
                </p>
              </div>

              <div>
                <h4 className="heading-subsection mb-2">Can I request specific plants or colors?</h4>
                <p className="text-muted-foreground font-body">
                  Absolutely! While the final results are always a beautiful surprise, I can work with specific botanicals to guide the color palette.
                </p>
              </div>
            </div>
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
            <h2 className="heading-section mb-6">Explore My Work</h2>
            <p className="text-elegant text-muted-foreground mb-10 max-w-xl mx-auto">
              See the full collection of botanical printed pieces and learn more about the process.
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
