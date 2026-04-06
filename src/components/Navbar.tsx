import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolio";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-1 font-heading text-xl">
          <span className="font-black text-primary">{personalInfo.firstName.toUpperCase()}</span>
          <span className="font-light text-accent">{personalInfo.lastName.toUpperCase()}</span>
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl animate-fade-in">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
