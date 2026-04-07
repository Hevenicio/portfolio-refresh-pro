import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { personalInfo, navLinks } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FooterSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve.",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <footer id="contato" className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-24">
          <p className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4 text-center">
            Contato
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Vamos trabalhar{" "}
            <span className="text-gradient">juntos?</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 font-mono text-sm">
            Envie uma mensagem e entrarei em contato o mais breve possível.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-muted/50 border-border font-mono text-sm h-12"
              />
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-muted/50 border-border font-mono text-sm h-12"
              />
            </div>
            <Textarea
              placeholder="Sua mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="bg-muted/50 border-border font-mono text-sm resize-y"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full h-12 font-mono text-sm gap-2"
            >
              <Send size={16} />
              Enviar mensagem
            </Button>
          </form>
        </div>

        {/* Footer bottom */}
        <div className="grid lg:grid-cols-2 gap-16 pt-16 border-t border-border">
          <div className="space-y-6">
            <div className="space-y-3">
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
