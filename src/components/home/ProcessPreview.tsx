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
    <section className="section-padding bg-earth relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rust/20 via-transparent to-ochre/10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-terracotta/10 rounded-full blur-[120px]" />
      
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-caption text-terracotta-light mb-4">The Journey</p>
          <h2 className="heading-section text-cream mb-6">From Plant to Garment</h2>
          <p className="text-elegant text-cream/75 max-w-2xl mx-auto">
            Every piece begins with patience. The fabric must soak, absorb, rest, and react. 
            This slow process is our signature — it is what makes Niraé different: honest, 
            handcrafted, and naturally beautiful.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-square overflow-hidden mb-5 relative rounded-sm shadow-elevated">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth/70 via-earth/20 to-transparent" />
                <span className="absolute bottom-4 left-4 text-5xl font-display font-bold text-cream/30">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="heading-subsection text-cream mb-2">{step.title}</h3>
              <p className="text-base text-cream/60 font-body">{step.description}</p>
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
          <Button variant="elegant" size="lg" asChild className="border-cream/40 text-cream hover:bg-cream/10 hover:border-cream">
            <Link to="/process">See Full Process</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessPreview;
