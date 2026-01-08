import { Brain, BarChart3, Target, Bot, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const features = [
  {
    icon: Brain,
    title: "IA de Conteúdo",
    description: "Criação automatizada de textos, copies e materiais criativos otimizados para conversão.",
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "IA de Dados & BI",
    description: "Análise preditiva e dashboards inteligentes que transformam dados em insights acionáveis.",
    color: "secondary",
  },
  {
    icon: Target,
    title: "IA de Performance",
    description: "Otimização contínua de campanhas com ajuste automático de budget e segmentação.",
    color: "accent",
  },
  {
    icon: Bot,
    title: "IA de Automação",
    description: "Fluxos inteligentes que respondem ao comportamento do usuário em tempo real.",
    color: "primary",
  },
  {
    icon: Search,
    title: "IA de SEO & Mídia",
    description: "Estratégias de conteúdo e mídia otimizadas por algoritmos de machine learning.",
    color: "secondary",
  },
];

const SolutionSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          border: "border-primary/30",
          text: "text-primary",
          glow: "group-hover:shadow-[0_0_30px_hsl(180_100%_50%/0.3)]",
        };
      case "secondary":
        return {
          bg: "bg-secondary/10",
          border: "border-secondary/30",
          text: "text-secondary",
          glow: "group-hover:shadow-[0_0_30px_hsl(270_100%_65%/0.3)]",
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          border: "border-accent/30",
          text: "text-accent",
          glow: "group-hover:shadow-[0_0_30px_hsl(150_100%_50%/0.3)]",
        };
      default:
        return {
          bg: "bg-primary/10",
          border: "border-primary/30",
          text: "text-primary",
          glow: "group-hover:shadow-[0_0_30px_hsl(180_100%_50%/0.3)]",
        };
    }
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Conheça o{" "}
            <span className="gradient-text">MAI</span>
            <br />
            Marketing Artificial Intelligence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma plataforma que <span className="text-foreground font-semibold">orquestra múltiplas IAs líderes do mercado</span> para 
            criar, analisar, prever e otimizar campanhas de marketing em tempo real.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <div
                key={index}
                className={`group glass-card p-6 rounded-2xl cursor-pointer transition-all duration-500 ${colors.glow} hover:scale-[1.02] hover:-translate-y-1`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  <feature.icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">{feature.title}</h3>
                <p className={`text-muted-foreground transition-all duration-300 ${hoveredIndex === index ? 'text-foreground' : ''}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="mailto:maiplataforma@gmail.com">
            <Button variant="gradient" size="xl">
              Quero Ver na Prática
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
