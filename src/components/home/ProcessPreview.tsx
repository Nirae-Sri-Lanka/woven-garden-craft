import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import fabricMordant from "@/assets/fabric-mordant.jpg";
import fabricDyeing from "@/assets/fabric-dyeing.jpg";
import fabricStack from "@/assets/fabric-stack.jpg";
import fabricSamples from "@/assets/fabric-samples.jpg";

const steps = [
  { image: fabricMordant, title: "Mordanting", description: "Preparing fabric with natural fixatives" },
  { image: fabricDyeing, title: "Natural Dyeing", description: "Extracting colour from plants" },
  { image: fabricStack, title: "Finishing", description: "Washing and curing the fabric" },
  { image: fabricSamples, title: "Creating", description: "Transforming into wearable art" },
];

const ProcessPreview = () => {
  return (
    <section className="section-padding bg-cream-dark relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sage/5 to-transparent -z-10" />
      
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-caption text-primary mb-4">The Journey</p>
          <h2 className="heading-section mb-6">From Plant to Garment</h2>
          <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
            Every piece begins with patience. The fabric must soak, absorb, rest, and react. 
            This slow process is our signature — it is what makes Niraé different: honest, 
            handcrafted, and naturally beautiful.
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
              <div className="aspect-square overflow-hidden mb-4 relative">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-3 text-4xl font-display text-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
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
