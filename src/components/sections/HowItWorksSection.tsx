import { Database, Target, Sparkles, TrendingUp, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Conecte seus dados",
    description: "Integre suas ferramentas e fontes de dados em minutos.",
  },
  {
    number: "02",
    icon: Target,
    title: "Escolha seu objetivo",
    description: "Defina metas claras: leads, vendas, engajamento.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "O MAI cria e otimiza",
    description: "A IA trabalha 24/7 para maximizar seus resultados.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Você escala resultados",
    description: "Acompanhe, aprenda e escale com confiança.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Marketing Inteligente
            <br />
            <span className="gradient-text">em 4 Passos</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent hidden lg:block -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card */}
                <div className="glass-card p-6 rounded-2xl h-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(180_100%_50%/0.15)]">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-bold font-heading gradient-text">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Connector dot */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary hidden lg:block glow-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="mailto:maiplataforma@gmail.com">
            <Button variant="neon-outline" size="lg">
              <Play className="w-5 h-5" />
              Ver Demo Interativa
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
