import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cream-dark border-t border-border">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-light mb-4">Botanical Threads</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Handcrafted garments dyed with nature's colors. Each piece tells a story of patience, artistry, and sustainable fashion.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-caption text-foreground mb-6">Explore</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/process" className="text-muted-foreground hover:text-primary transition-colors font-body">
                My Process
              </Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors font-body">
                Gallery
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors font-body">
                About Me
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors font-body">
                Get in Touch
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-caption text-foreground mb-6">Connect</h4>
            <div className="flex flex-col gap-3 text-muted-foreground font-body">
              <a href="mailto:hello@botanicalthreads.com" className="hover:text-primary transition-colors">
                hello@botanicalthreads.com
              </a>
              <a href="https://instagram.com/botanicalthreads" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="https://facebook.com/botanicalthreads" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="https://tiktok.com/@botanicalthreads" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                TikTok
              </a>
              <a href="https://youtube.com/@botanicalthreads" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="divider-botanical mt-16 mb-8" />

        <p className="text-center text-sm text-muted-foreground font-body">
          © {new Date().getFullYear()} Botanical Threads. All pieces are one-of-a-kind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
