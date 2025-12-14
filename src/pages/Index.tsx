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
      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-caption text-primary mb-4">Interested?</p>
            <h2 className="heading-section mb-6">Let's Create Together</h2>
            <p className="text-elegant text-muted-foreground max-w-xl mx-auto mb-10">
              Whether you're looking for a unique piece or want to learn about 
              the art of botanical dyeing, I'd love to hear from you.
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
