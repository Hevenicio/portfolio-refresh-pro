import { GraduationCap } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import { education } from "@/data/portfolio";

const TimelineSection = () => {
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
    <section id="formacao" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-20">
        <p className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">
          Formação
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16">
          Formação acadêmica
        </h2>

        <div className="relative max-w-3xl mx-auto" ref={containerRef}>
          <svg
            className="absolute left-1/2 top-0 h-full -translate-x-1/2 pointer-events-none overflow-visible"
            viewBox={`0 0 100 ${svgHeight}`} preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64 }}
          >
            <path d={pathD} className="stroke-primary/20" strokeWidth={2} vectorEffect="non-scaling-stroke" />
          </svg>

          {education.map((item, i) => (
            <div
              key={i}
              className={`relative flex items-start mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div ref={(el) => (iconRefs.current[i] = el)} className="absolute left-1/2 top-8 -translate-x-1/2 z-10">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 border border-primary/30 shadow-sm">
                  <GraduationCap size={18} className="text-primary" />
                </div>
              </div>

              <div className={`mt-8 md:mt-0 md:w-[calc(45%-2rem)] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto md:text-left"}`}>
                <div className="p-6 rounded-[1.75rem] bg-card border border-border hover:border-primary/30 transition-all duration-300 group">
                  <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <GraduationCap size={14} className="text-primary" />
                    <span className="font-mono text-xs font-semibold text-primary">{item.date}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">{item.institution}</p>
                  {item.detail && <p className="font-mono text-xs text-muted-foreground/70 mt-1 italic">{item.detail}</p>}
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
