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
          {/* Curved SVG line */}
          <svg
            className="absolute left-4 md:left-1/2 top-0 h-full w-20 md:w-40 -translate-x-1/2 pointer-events-none"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={`M 50% 0 ${timeline
                .map((_, i) => {
                  const segHeight = 100 / timeline.length;
                  const y1 = segHeight * i + segHeight * 0.3;
                  const y2 = segHeight * i + segHeight * 0.7;
                  const yEnd = segHeight * (i + 1);
                  const dir = i % 2 === 0 ? 30 : -30;
                  return `C 50% ${y1}%, ${50 + dir}% ${y2}%, 50% ${yEnd}%`;
                })
                .join(" ")}`}
              className="stroke-primary/20"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {timeline.map((item, i) => (
            <div
              key={i}
              className={`relative flex items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-6 z-10 ring-4 ring-background" />

              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
                }`}
              >
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group">
                  <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Briefcase size={14} className="text-primary" />
                    <span className="font-mono text-xs font-semibold text-primary">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
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

export default ExperienceSection;
