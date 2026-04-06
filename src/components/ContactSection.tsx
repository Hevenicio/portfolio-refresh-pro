import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-20 max-w-2xl">
        <p className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4 text-center">
          Contato
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
          Vamos trabalhar <span className="text-accent">juntos?</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono text-sm">
          Envie uma mensagem e entrarei em contato o mais breve possível.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              placeholder="Seu nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-card border-border focus:border-accent"
            />
            <Input
              type="email"
              placeholder="Seu e-mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-card border-border focus:border-accent"
            />
          </div>
          <Textarea
            placeholder="Sua mensagem..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={6}
            className="bg-card border-border focus:border-accent"
          />
          <Button
            type="submit"
            className="w-full bg-primary text-accent hover:bg-primary/90 font-mono font-semibold text-sm"
          >
            <Send size={16} />
            Enviar mensagem
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
