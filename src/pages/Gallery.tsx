import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import galleryKimono from "@/assets/gallery-kimono.jpg";
import galleryScarf from "@/assets/gallery-scarf.jpg";
import galleryDress from "@/assets/gallery-dress.jpg";
import processReveal from "@/assets/process-reveal.jpg";
import colorOutcomes from "@/assets/color-outcomes.jpg";
import heroFabric from "@/assets/hero-fabric.jpg";

const categories = ["All", "Kimonos", "Dresses", "Scarves", "Fabrics"];

const galleryItems = [
  { 
    id: 1, 
    image: galleryKimono, 
    title: "Autumn Kimono", 
    category: "Kimonos",
    description: "Eucalyptus and fern prints on silk" 
  },
  { 
    id: 2, 
    image: galleryScarf, 
    title: "Eucalyptus Silk Scarf", 
    category: "Scarves",
    description: "Rust tones from silver dollar eucalyptus" 
  },
  { 
    id: 3, 
    image: galleryDress, 
    title: "Garden Sundress", 
    category: "Dresses",
    description: "Botanical prints on natural linen" 
  },
  { 
    id: 4, 
    image: processReveal, 
    title: "Maple Silk Panel", 
    category: "Fabrics",
    description: "One-of-a-kind printed fabric" 
  },
  { 
    id: 5, 
    image: colorOutcomes, 
    title: "Color Study Collection", 
    category: "Fabrics",
    description: "Exploring nature's palette" 
  },
  { 
    id: 6, 
    image: heroFabric, 
    title: "Sage & Terracotta Wrap", 
    category: "Scarves",
    description: "Multi-botanical blend" 
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
            <p className="text-caption text-primary mb-4">Collection</p>
            <h1 className="heading-hero mb-8">
              <span className="italic">Gallery</span>
            </h1>
            <p className="text-elegant text-muted-foreground">
              Each piece is one-of-a-kind, carrying the imprint of specific leaves gathered 
              on specific days. These are the stories nature wrote onto fabric.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm uppercase tracking-[0.15em] font-body transition-all duration-300 rounded-full ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="aspect-[3/4] overflow-hidden mb-4 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-background text-sm uppercase tracking-widest font-body">
                        View Details
                      </span>
                    </div>
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">{item.category}</p>
                  <h3 className="heading-subsection group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body mt-1">{item.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-caption text-primary mb-2">{selectedItem.category}</p>
                <h2 className="heading-section mb-4">{selectedItem.title}</h2>
                <p className="text-elegant text-muted-foreground mb-6">{selectedItem.description}</p>
                <p className="text-muted-foreground font-body text-sm">
                  Each piece is handcrafted using natural botanical dyes. The prints you see 
                  are created by actual leaves and flowers, making every item truly unique.
                </p>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="mt-8 text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
