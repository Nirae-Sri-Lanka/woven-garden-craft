import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import galleryKimono from "@/assets/gallery-kimono.jpg";
import galleryScarf from "@/assets/gallery-scarf.jpg";
import galleryDress from "@/assets/gallery-dress.jpg";
import fabricStack from "@/assets/fabric-stack.jpg";

const pieces = [
  { image: galleryKimono, title: "Botanical Kimono", category: "Outerwear" },
  { image: galleryScarf, title: "Eucalyptus Scarf", category: "Accessories" },
  { image: galleryDress, title: "Garden Dress", category: "Dresses" },
  { image: fabricStack, title: "Layered Textures", category: "Collection" },
];

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-caption text-primary mb-4">Collection</p>
            <h2 className="heading-section">Wearable Nature</h2>
          </div>
          <p className="text-elegant text-muted-foreground max-w-md">
            Each collection is a chapter, not a season. Our designs are developed slowly and 
            intentionally, guided by concept, material, and craft rather than trends.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {pieces.map((piece, index) => (
            <motion.div
              key={piece.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-4 relative">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">{piece.category}</p>
              <h3 className="heading-subsection group-hover:text-primary transition-colors">{piece.title}</h3>
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
            <Link to="/gallery">View All Pieces</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
