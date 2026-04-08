import { Briefcase } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import { timeline } from "@/data/portfolio";

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iconRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [pathD, setPathD] = useState("");
  const [svgHeight, setSvgHeight] = useState(0);
  const cx = 50;

  const updateCurve = () => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const points = iconRefs.current
      .map((icon) => {
        if (!icon) return null;
        const rect = icon.getBoundingClientRect();
        return rect.top - containerRect.top + rect.height / 2;
      })
      .filter((point): point is number => point !== null);

    if (points.length < 2) return;

    const height = Math.max(containerRect.height, points[points.length - 1] + 32);
    let nextPathD = `M ${cx} ${points[0]}`;

    for (let i = 0; i < points.length - 1; i++) {
      const startY = points[i];
      const endY = points[i + 1];
      const curve = i % 2 === 0 ? 90 : -90;
      const controlY1 = startY + (endY - startY) / 3;
      const controlY2 = startY + (2 * (endY - startY)) / 3;

      nextPathD += ` C ${cx + curve} ${controlY1}, ${cx + curve} ${controlY2}, ${cx} ${endY}`;
    }

    setSvgHeight(height);
    setPathD(nextPathD);
  };

  useLayoutEffect(() => {
    updateCurve();
    window.addEventListener("resize", updateCurve);
    return () => window.removeEventListener("resize", updateCurve);
  }, []);

  return (
    <section id="experiencia" className="py-24 lg:py-32 bg-card/30">
      <div className="container mx-auto px-6 lg:px-20">
        <p className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">
          Experiência
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16">
          Trajetória profissional
        </h2>

        <div className="relative max-w-5xl mx-auto" ref={containerRef}>
          {/* Curved SVG line */}
          <svg
            className="absolute left-4 md:left-1/2 top-0 h-full -translate-x-1/2 pointer-events-none overflow-visible"
            viewBox={`0 0 100 ${svgHeight}`}
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: 80 }}
          >
            <path
              d={pathD}
              className="stroke-primary/20"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {timeline.map((item, i) => (
            <div
              key={i}
              className={`relative flex items-start mb-16 last:mb-0 md:min-h-[240px] ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              <div
                ref={(el) => (iconRefs.current[i] = el)}
                className="absolute left-4 md:left-1/2 -translate-x-1/2 top-8 z-10 flex items-center justify-center"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center ring-4 ring-background shadow-lg">
                  <Briefcase size={20} className="text-background" />
                </div>
              </div>

              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                  }`}
              >
                <div className="p-8 rounded-[1.75rem] bg-card border border-border hover:border-primary/30 transition-all duration-300 group shadow-[0_20px_60px_-35px_rgba(0,0,0,0.4)]">
                  <div className={`flex items-center gap-2 mb-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Briefcase size={16} className="text-primary" />
                    <span className="font-mono text-sm font-semibold text-primary">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-base text-muted-foreground leading-8">
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