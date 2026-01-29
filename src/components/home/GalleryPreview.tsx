import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import collectionVestBag from "@/assets/collection-vest-bag.jpg";
import collectionEmbroidery from "@/assets/collection-embroidery.jpg";
import collectionPinkDress from "@/assets/collection-pink-dress.jpg";
import collectionSageDress from "@/assets/collection-sage-dress.jpg";
import collectionCorsetDetail from "@/assets/collection-corset-detail.jpg";
import collectionLaceDress from "@/assets/collection-lace-dress.jpg";
import collectionEmbroideredTop from "@/assets/collection-embroidered-top.jpg";

const pieces = [
  { image: collectionVestBag, title: "Botanical Vest Set", category: "Sets" },
  { image: collectionEmbroidery, title: "Eco-Print Detail", category: "Details" },
  { image: collectionPinkDress, title: "Rose Corset Dress", category: "Dresses" },
  { image: collectionSageDress, title: "Sage Garden Dress", category: "Dresses" },
  { image: collectionCorsetDetail, title: "Floral Corset", category: "Details" },
  { image: collectionLaceDress, title: "Ivory Lace Dress", category: "Dresses" },
  { image: collectionEmbroideredTop, title: "Embroidered Blouse", category: "Tops" },
];

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-background">
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
            <h2 className="heading-section text-foreground">Wearable Nature</h2>
          </div>
          <p className="text-elegant text-foreground/75 max-w-md">
            Each collection is a chapter, not a season. Our designs are developed slowly and 
            intentionally, guided by concept, material, and craft rather than trends.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {pieces.map((piece, index) => (
            <motion.div
              key={piece.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-5 relative rounded-sm shadow-soft group-hover:shadow-elevated transition-shadow duration-500">
                <img
                  src={piece.image}
                  alt={piece.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-2 font-semibold">{piece.category}</p>
              <h3 className="heading-subsection text-foreground group-hover:text-primary transition-colors">{piece.title}</h3>
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
