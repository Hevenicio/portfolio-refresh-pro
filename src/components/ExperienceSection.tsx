import { Briefcase } from "lucide-react";
import { timeline } from "@/data/portfolio";

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6 lg:px-20">
        <p className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">
          Experiência
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16">
          Trajetória profissional
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[1.35rem] md:left-[1.6rem] top-0 bottom-0 w-px bg-primary/20" />

          {timeline.map((item, i) => (
            <div key={i} className="relative flex items-start gap-6 mb-10 last:mb-0">
              {/* Icon */}
              <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-11 h-11 md:w-13 md:h-13 rounded-full bg-primary/10 border border-primary/30 shadow-sm">
                <Briefcase size={18} className="text-primary" />
              </div>

              {/* Card */}
              <div className="flex-1 p-6 rounded-[1.75rem] bg-card border border-border hover:border-primary/30 transition-all duration-300 group shadow-[0_20px_60px_-35px_rgba(0,0,0,0.4)]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs font-semibold text-primary">
                    {item.date}
                  </span>
                </div>
                <p className="font-mono text-sm text-muted-foreground/70 mb-2 italic">
                  {item.company}
                </p>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
