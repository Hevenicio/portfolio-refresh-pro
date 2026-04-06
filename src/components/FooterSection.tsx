import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personalInfo, navLinks } from "@/data/portfolio";

const FooterSection = () => {
  return (
    <footer id="contato" className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className="space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Vamos trabalhar{" "}
              <span className="text-gradient">juntos?</span>
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span className="font-mono text-sm">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a
                  href={personalInfo.socials.email}
                  className="font-mono text-sm hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: personalInfo.socials.linkedin },
                { icon: Github, href: personalInfo.socials.github },
                { icon: Mail, href: personalInfo.socials.email },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.firstName} {personalInfo.lastName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
