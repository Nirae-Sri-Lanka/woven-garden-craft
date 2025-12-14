import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-body text-muted-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary font-body"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-body text-muted-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-primary font-body"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-body text-muted-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-primary font-body"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-body text-muted-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background border-border focus:border-primary font-body resize-none"
                    placeholder="Tell me about your inquiry..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="botanical" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h3 className="heading-subsection mb-4">Email</h3>
                <a 
                  href="mailto:hello@botanicalthreads.com" 
                  className="text-muted-foreground font-body hover:text-primary transition-colors"
                >
                  hello@botanicalthreads.com
                </a>
              </div>

              <div>
                <h3 className="heading-subsection mb-4">Social</h3>
                <div className="space-y-2">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-muted-foreground font-body hover:text-primary transition-colors"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://pinterest.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-muted-foreground font-body hover:text-primary transition-colors"
                  >
                    Pinterest
                  </a>
                </div>
              </div>

              <div>
                <h3 className="heading-subsection mb-4">Custom Orders</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Interested in a custom piece? I take on select commissions throughout 
                  the year. Share your vision and I'll let you know what's possible.
                </p>
              </div>

              <div>
                <h3 className="heading-subsection mb-4">Response Time</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  I typically respond within 2-3 business days. Please note that 
                  during busy seasons, it may take a bit longer.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-padding bg-cream-dark">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-section mb-8">Common Questions</h2>
            
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
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
