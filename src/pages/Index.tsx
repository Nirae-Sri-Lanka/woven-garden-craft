import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ProcessPreview from "@/components/home/ProcessPreview";
import Philosophy from "@/components/home/Philosophy";
import GalleryPreview from "@/components/home/GalleryPreview";
import VideoShowcase from "@/components/home/VideoShowcase";
import VideoSection from "@/components/home/VideoSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <VideoSection />
      <VideoShowcase />
      <ProcessPreview />
      <Philosophy />
      <GalleryPreview />
      
      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-b from-cream to-cream-dark">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage/10 via-transparent to-terracotta/10 -z-10" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-[80px]" />
        
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-ochre mx-auto mb-10" />
            <p className="text-caption text-primary mb-4">Thank You</p>
            <h2 className="heading-section text-foreground mb-6">Supporting Slow Fashion</h2>
            <p className="text-elegant text-foreground/75 max-w-xl mx-auto mb-4">
              When you choose natural dye, you choose clothing that respects the planet 
              and celebrates craftsmanship.
            </p>
            <p className="text-xl font-display font-medium italic text-primary max-w-lg mx-auto mb-12">
              For orders, custom enquiries, collaborations, or general questions — 
              feel free to reach out.
            </p>
            <Button variant="botanical" size="lg" asChild className="shadow-glow">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
