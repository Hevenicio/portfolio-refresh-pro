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
              className={`relative flex items-start mb-12 last:mb-0 group ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div ref={(el) => (iconRefs.current[i] = el)} className="absolute left-1/2 top-8 -translate-x-1/2 z-10">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#a0b1b1] bg-[#64f4ac] text-[#02312b] shrink-0 z-10 shadow-md group-hover:scale-110 transition-transform">
                  <GraduationCap size={18} strokeWidth={2.5} />
                </div>
              </div>

              <div className={`mt-8 md:mt-0 w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto md:text-left"}`}>
                <div className="p-6 md:p-8 rounded-[1.75rem] bg-[#02312b] text-white border border-transparent hover:border-[#64f4ac]/40 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:-translate-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-start md:items-center justify-between mb-4 gap-3">
                    <h1 className="text-[18px] md:text-[20px] font-bold font-sans leading-tight tracking-tight">{item.title}</h1>
                    <span className="inline-flex items-center rounded-md px-3 py-1 text-[13px] font-bold bg-[#64f4ac]/10 border border-[#64f4ac]/30 text-[#64f4ac] whitespace-nowrap">{item.date}</span>
                  </div>
                  <p className="text-[#64f4ac] font-semibold mb-3">{item.institution}</p>
                  {item.detail && <p className="text-[14px] leading-relaxed text-slate-300 font-medium mb-1 italic">{item.detail}</p>}
                  <p className="text-[14px] leading-relaxed text-slate-300 font-medium">{!item.detail ? item.institution : ''}</p>
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
