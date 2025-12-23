import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ProcessPreview from "@/components/home/ProcessPreview";
import Philosophy from "@/components/home/Philosophy";
import GalleryPreview from "@/components/home/GalleryPreview";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ProcessPreview />
      <Philosophy />
      <GalleryPreview />
      
      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage/5 via-transparent to-terracotta/5 -z-10" />
        
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-px bg-primary mx-auto mb-8" />
            <p className="text-caption text-primary mb-4">Thank You</p>
            <h2 className="heading-section mb-6">Supporting Slow Fashion</h2>
            <p className="text-elegant text-muted-foreground max-w-xl mx-auto mb-4">
              When you choose natural dye, you choose clothing that respects the planet 
              and celebrates craftsmanship.
            </p>
            <p className="text-lg font-display italic text-primary/80 max-w-lg mx-auto mb-10">
              For orders, custom enquiries, collaborations, or general questions — 
              feel free to reach out.
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

export default Index;
