import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personalInfo, navLinks } from "@/data/portfolio";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-primary text-accent">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-heading text-xl">
              <span className="font-black">{personalInfo.firstName.toUpperCase()}</span>{" "}
              <span className="font-light opacity-70">{personalInfo.lastName.toUpperCase()}</span>
            </div>
            <div className="flex items-center gap-2 opacity-70">
              <MapPin size={14} />
              <span className="font-mono text-sm">{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 opacity-70">
              <Mail size={14} />
              <a href={personalInfo.socials.email} className="font-mono text-sm hover:opacity-100 transition-opacity">
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 opacity-70">
              Navegação
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-mono text-sm opacity-60 hover:opacity-100 transition-opacity">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 opacity-70">
              Social
            </h3>
            <div className="flex gap-3">
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
                  className="w-10 h-10 rounded-lg border border-accent/20 flex items-center justify-center opacity-60 hover:opacity-100 hover:bg-accent/10 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-accent/15 text-center">
          <p className="font-mono text-xs opacity-50">
            © {new Date().getFullYear()} {personalInfo.firstName} {personalInfo.lastName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
