import { Radio, ShoppingCart, BarChart3, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ecosystemPillars = [
  {
    icon: Radio,
    title: "📡 MÍDIA",
    color: "primary",
    integrations: ["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads", "YouTube Ads"],
    description: "Todas as plataformas de mídia paga conectadas em tempo real.",
  },
  {
    icon: ShoppingCart,
    title: "🛒 CANAIS DE VENDA",
    color: "accent",
    integrations: ["E-commerce (Shopify, VTEX, WooCommerce)", "Landing Pages", "Checkouts", "Marketplaces", "WhatsApp Business API"],
    description: "Cada ponto de conversão rastreado e integrado.",
  },
  {
    icon: BarChart3,
    title: "📊 ANALYTICS",
    color: "secondary",
    integrations: ["Google Analytics 4", "Pixels", "Eventos", "APIs proprietárias", "Dados comportamentais"],
    description: "Todos os dados unificados em um único ecossistema.",
  },
];

const insights = [
  "Insights estratégicos automatizados",
  "Sugestões de otimização",
  "Projeções de crescimento",
  "Diagnóstico de gargalos",
  "Recomendações acionáveis",
];

const SolutionSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary": return { bg: "bg-primary/10", border: "border-primary/30", text: "text-primary" };
      case "accent": return { bg: "bg-accent/10", border: "border-accent/30", text: "text-accent" };
      case "secondary": return { bg: "bg-secondary/10", border: "border-secondary/30", text: "text-secondary" };
      default: return { bg: "bg-primary/10", border: "border-primary/30", text: "text-primary" };
    }
  };

  return (
    <section id="ecossistema" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Ecossistema{" "}
            <span className="gradient-text">360º Inteligente</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A MAI conecta <span className="text-foreground font-semibold">mídia, vendas e analytics</span> em uma 
            única plataforma. Ela enxerga todo o caminho:{" "}
            <span className="text-primary">Investimento → Tráfego → Engajamento → Conversão → Receita → ROI</span>
          </p>
        </div>

        {/* Ecosystem Pillars - Tab cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {ecosystemPillars.map((pillar, index) => {
            const colors = getColorClasses(pillar.color);
            const isActive = activeTab === index;
            return (
              <div
                key={index}
                className={`glass-card p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                  isActive ? `border-2 ${colors.border} shadow-[0_0_30px_hsl(${pillar.color === 'primary' ? '180' : pillar.color === 'accent' ? '150' : '270'}_100%_50%/0.2)]` : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                <h3 className="text-xl font-bold font-heading mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pillar.description}</p>
                <div className="space-y-2">
                  {pillar.integrations.map((integration, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace('/10', '')}`} />
                      <span className="text-sm text-muted-foreground">{integration}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* What MAI transforms this into */}
        <div className="glass-card p-8 rounded-2xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
              <Zap className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-xl font-bold font-heading">O que a MAI transforma isso:</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {insights.map((insight, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-accent/5 border border-accent/10">
                <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm font-medium">{insight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="mailto:maiplataforma@gmail.com">
            <Button variant="gradient" size="xl">
              Quero Conectar Meu Ecossistema
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
