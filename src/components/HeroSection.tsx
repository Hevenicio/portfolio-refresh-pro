import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = personalInfo.roles[currentRole];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === role) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % personalInfo.roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting ? role.slice(0, displayText.length - 1) : role.slice(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Floating social icons */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-5">
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
            className="text-muted-foreground transition-all duration-300 hover:text-accent hover:scale-110"
          >
            <Icon size={20} />
          </a>
        ))}
        <div className="w-px h-20 bg-border mx-auto" />
      </div>

      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            {/* Role badges */}
            <div className="flex flex-wrap gap-3">
              {personalInfo.roles.slice(0, 2).map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-accent/15 text-primary border border-accent/30"
                >
                  {role}
                </span>
              ))}
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
              {personalInfo.headline.split("Magic").map((part, i) =>
                i === 0 ? (
                  <span key={i}>
                    {part}
                    <span className="text-accent">Magic</span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </h1>

            {/* Typewriter */}
            <div className="font-mono text-lg text-accent">
              <span>{displayText}</span>
              <span className="typewriter-cursor" />
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-lg">
              {personalInfo.description}
            </p>

            {/* Stats */}
            <div className="flex gap-10 pt-4">
              {personalInfo.stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-3">
                  <span className="text-4xl font-heading font-bold text-accent">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground whitespace-pre-line leading-tight pt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - decorative */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="w-80 h-80 rounded-full bg-accent/10 glow-shadow animate-float" />
            <div className="absolute w-60 h-60 rounded-full border border-accent/20 animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute w-40 h-40 rounded-full border border-accent/10 animate-float" style={{ animationDelay: "2s" }} />
            <div className="absolute font-mono text-6xl font-bold text-primary/15">{"</>"}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
