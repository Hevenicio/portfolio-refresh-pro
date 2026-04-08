import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">
              Portfólio
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Projetos recentes
            </h2>
          </div>
          <a
            href="https://github.com/Hevenicio"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Ver GitHub <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.2)]"
            >
              <div className="p-6 lg:p-8 space-y-5">
                <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-4 pt-2">
                  <div>
                    <p className="font-mono text-[10px] font-bold tracking-widest text-primary uppercase mb-1">
                      Situação / Desafio
                    </p>
                    <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                      {project.situation}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] font-bold tracking-widest text-primary uppercase mb-1">
                      Ação / Solução
                    </p>
                    <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                      {project.action}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] font-bold tracking-widest text-primary uppercase mb-1">
                      Resultado
                    </p>
                    <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Código
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Saber mais <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
