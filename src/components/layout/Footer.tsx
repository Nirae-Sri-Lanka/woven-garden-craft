import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cream-dark border-t border-border">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-light mb-4 italic">Niraé</h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Handmade clothing built on slow craft, natural dye, and mindful creation. 
              Every piece is one-of-a-kind.
            </p>
            <p className="text-sm text-primary font-body italic">
              Honest. Sustainable. Beautifully unique.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-caption text-foreground mb-6">Explore</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/process" className="text-muted-foreground hover:text-primary transition-colors font-body">
                Our Process
              </Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors font-body">
                Gallery
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors font-body">
                About Niraé
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors font-body">
                Get in Touch
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-caption text-foreground mb-6">Connect</h4>
            <div className="flex flex-col gap-3 text-muted-foreground font-body mb-6">
              <a href="mailto:niraeofficial@gmail.com" className="hover:text-primary transition-colors">
                niraeofficial@gmail.com
              </a>
              <a href="https://wa.me/94704220203" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                +94 70 422 0203
              </a>
              <p>Sri Lanka</p>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/niraedesigns" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com/niraedesigns" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://tiktok.com/@niraedesigns" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <MessageCircle size={18} />
              </a>
              <a 
                href="https://youtube.com/@niraedesigns" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="divider-botanical mt-16 mb-8" />

        <p className="text-center text-sm text-muted-foreground font-body">
          © {new Date().getFullYear()} Niraé. All pieces are one-of-a-kind. Handmade in Sri Lanka.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
