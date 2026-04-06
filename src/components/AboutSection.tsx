import { useState } from "react";
import { Palette, Code2, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { aboutTabs } from "@/data/portfolio";

const iconMap = { Palette, Code2, User };

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("design");
  const activeContent = aboutTabs.find((t) => t.id === activeTab);

  return (
    <section id="sobre" className="py-24 lg:py-32 section-alt">
      <div className="container mx-auto px-6 lg:px-20">
        <p className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">
          Sobre mim
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-16">
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
                      ? "bg-accent/10 border-accent/30 glow-shadow"
                      : "bg-card border-border hover:border-accent/20 card-shadow"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className={`font-heading text-xl font-semibold ${
                        isActive ? "text-accent" : "text-primary"
                      }`}
                    >
                      {tab.title}
                    </h3>
                    <Icon
                      size={20}
                      className={isActive ? "text-accent" : "text-muted-foreground"}
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
            <AnimatePresence mode="wait">
              {activeContent && (
                <motion.div
                  key={activeContent.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="p-8 rounded-2xl bg-card border border-border card-shadow">
                    <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                      {activeContent.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {activeContent.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
