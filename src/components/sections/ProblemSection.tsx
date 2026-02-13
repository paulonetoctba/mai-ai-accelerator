import { AlertTriangle, Layers, Clock, TrendingDown, Eye, Unplug } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: Layers,
    text: "Dados de mídia, vendas e analytics em ferramentas separadas",
  },
  {
    icon: Unplug,
    text: "Nenhuma conexão entre investimento e receita real",
  },
  {
    icon: Eye,
    text: "Visão fragmentada: você vê cliques, mas não vê o ROI ponta a ponta",
  },
  {
    icon: TrendingDown,
    text: "Decisões baseadas em achismo, não em inteligência cruzada",
  },
  {
    icon: Clock,
    text: "Horas perdidas montando relatórios manuais que já nascem desatualizados",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-8">
              Seu Marketing Está
              <br />
              <span className="text-destructive">Desconectado.</span>
              <br />
              Seu ROI Também.
            </h2>

            <div className="space-y-5 mb-10">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 group animate-slide-in-left opacity-0"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                    <problem.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                    {problem.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary">
              <p className="text-xl italic text-muted-foreground">
                "O problema não é falta de ferramentas.
                <br />
                <span className="text-foreground font-semibold">
                  É falta de um cérebro que conecte tudo.
                </span>
              </p>
            </div>
          </div>

          {/* Right visual - Disconnected ecosystem */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-destructive/10 via-transparent to-transparent" />
            
            <div className="relative grid grid-cols-3 gap-4">
              {["Google Ads", "Meta Ads", "Shopify", "GA4", "WhatsApp", "LinkedIn", "TikTok", "CRM", "Excel"].map((tool, i) => (
                <div
                  key={i}
                  className="aspect-square glass-card flex items-center justify-center group hover:border-destructive/50 transition-all duration-300 p-2"
                  style={{
                    transform: `rotate(${(i - 4) * 3}deg) translate(${(i % 3 - 1) * 5}px, ${Math.floor(i / 3 - 1) * 5}px)`,
                  }}
                >
                  <span className="text-[10px] text-muted-foreground group-hover:text-destructive text-center font-medium transition-colors">
                    {tool}
                  </span>
                </div>
              ))}
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                <line x1="20%" y1="20%" x2="80%" y2="80%" stroke="hsl(0 84% 60%)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="80%" y1="20%" x2="20%" y2="80%" stroke="hsl(0 84% 60%)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="hsl(0 84% 60%)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="mailto:maiplataforma@gmail.com">
            <Button variant="neon" size="lg">
              Quero Conectar Meu Ecossistema
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
