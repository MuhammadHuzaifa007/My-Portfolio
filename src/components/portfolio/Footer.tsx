import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear}</span>
            <span className="font-display font-bold">
              <span className="text-gradient">Muhammad Huzaifa Zeb</span>
            </span>
            <span>All rights reserved.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/MuhammadHuzaifa007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://linkedin.com/in/muhammad-huzaifa-zeb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="mailto:huzaifazaib69@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
