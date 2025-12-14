import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import processGathering from "@/assets/process-gathering.jpg";
import processBundling from "@/assets/process-bundling.jpg";
import processReveal from "@/assets/process-reveal.jpg";
import processSewing from "@/assets/process-sewing.jpg";

const steps = [
  { image: processGathering, title: "Gathering", description: "Selecting leaves, flowers & botanicals" },
  { image: processBundling, title: "Bundling", description: "Layering nature onto fabric" },
  { image: processReveal, title: "Revealing", description: "Unwrapping nature's palette" },
  { image: processSewing, title: "Creating", description: "Transforming into wearable art" },
];

const ProcessPreview = () => {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-caption text-primary mb-4">The Journey</p>
          <h2 className="heading-section mb-6">From Nature to Garment</h2>
          <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
            Every piece begins with a walk through nature, gathering leaves and flowers 
            that will transfer their essence onto fabric through ancient eco-printing techniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-square overflow-hidden mb-4">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="heading-subsection mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="botanical-outline" size="lg" asChild>
            <Link to="/process">See Full Process</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessPreview;
