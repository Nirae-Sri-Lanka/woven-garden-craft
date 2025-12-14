import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-8xl font-display text-primary/20 mb-4">404</p>
          <h1 className="heading-section mb-6">Page Not Found</h1>
          <p className="text-elegant text-muted-foreground mb-10 max-w-md mx-auto">
            The page you're looking for seems to have wandered off into the forest. 
            Let's get you back on track.
          </p>
          <Button variant="botanical" size="lg" asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </motion.div>
      </section>
    </Layout>
  );
};

export default NotFound;
