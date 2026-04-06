import { useState } from "react";
import { Palette, Code2, User } from "lucide-react";
import { aboutTabs } from "@/data/portfolio";

const iconMap = { Palette, Code2, User };

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("design");
  const activeContent = aboutTabs.find((t) => t.id === activeTab);

  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-20">
        <p className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">
          Sobre mim
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16">
          Conheça meu trabalho
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Tabs */}
          <div className="space-y-4">
            {aboutTabs.map((tab) => {
              const Icon = iconMap[tab.icon as keyof typeof iconMap];
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 border ${
                    isActive
                      ? "bg-primary/10 border-primary/30 glow-shadow"
                      : "bg-card border-border hover:border-primary/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className={`font-heading text-xl font-semibold ${
                        isActive ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {tab.title}
                    </h3>
                    <Icon
                      size={20}
                      className={isActive ? "text-primary" : "text-muted-foreground"}
                    />
                  </div>
                  <p className="font-mono text-sm text-muted-foreground line-clamp-2">
                    {tab.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="flex items-center min-h-[300px]">
            {activeContent && (
              <div key={activeContent.id} className="animate-fade-in">
                <div className="p-8 rounded-2xl bg-card border border-border">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                    {activeContent.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {activeContent.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
