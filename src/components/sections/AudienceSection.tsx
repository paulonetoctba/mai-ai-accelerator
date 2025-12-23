import { User, Briefcase, Building2, TrendingUp, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const audiences = [
  {
    icon: User,
    title: "Empreendedores",
    description: "Escale seu marketing sem escalar sua equipe.",
    cta: "Sou Empreendedor",
  },
  {
    icon: Briefcase,
    title: "Gestores de Marketing",
    description: "Unifique suas ferramentas e multiplique resultados.",
    cta: "Sou Gestor",
  },
  {
    icon: Building2,
    title: "Agências",
    description: "Entregue mais valor para mais clientes.",
    cta: "Sou Agência",
  },
  {
    icon: TrendingUp,
    title: "Times de Growth",
    description: "Experimente mais rápido, escale com dados.",
    cta: "Sou Growth",
  },
  {
    icon: Database,
    title: "Empresas Data-Driven",
    description: "Transforme dados em decisões estratégicas.",
    cta: "Sou Empresa",
  },
];

const AudienceSection = () => {
  const [selectedAudience, setSelectedAudience] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
            O MAI é Para Quem
            <br />
            <span className="gradient-text">Leva Marketing a Sério</span>
          </h2>
        </div>

        {/* Audience cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className={`glass-card p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 group ${
                selectedAudience === index 
                  ? 'border-primary shadow-[0_0_30px_hsl(180_100%_50%/0.3)]' 
                  : 'hover:border-primary/50'
              }`}
              onClick={() => setSelectedAudience(index)}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <audience.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">{audience.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{audience.description}</p>
              <Button 
                variant={selectedAudience === index ? "neon" : "ghost"} 
                size="sm" 
                className="w-full"
              >
                {audience.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
