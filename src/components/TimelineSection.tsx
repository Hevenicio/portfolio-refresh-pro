import { GraduationCap } from "lucide-react";
import { timeline } from "@/data/portfolio";

const TimelineSection = () => {
  return (
    <section id="formacao" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-20">
        <p className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">
          Formação
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-16">
          Minha jornada
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/30 md:-translate-x-px" />

          {timeline.map((item, i) => (
            <div
              key={i}
              className={`relative flex items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent -translate-x-1/2 mt-6 z-10 ring-4 ring-background" />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
                }`}
              >
                <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300 group card-shadow">
                  <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <GraduationCap size={14} className="text-accent" />
                    <span className="font-mono text-xs font-semibold text-accent">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
