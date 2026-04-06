import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  return (
    <section id="portfolio" className="py-24 lg:py-32 section-alt">
      <div className="container mx-auto px-6 lg:px-20">
        <p className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">
          Portfólio
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-16">
          Projetos recentes
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-[0_4px_20px_hsl(152_87%_67%/0.15)] card-shadow"
            >
              {/* Gradient header */}
              <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                <span className="font-mono text-5xl font-bold text-primary/10 group-hover:text-accent/40 transition-colors">
                  {"</>"}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-heading text-xl font-bold text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-mono text-xs bg-accent/10 text-primary border border-accent/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github size={16} />
                    Código
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
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
