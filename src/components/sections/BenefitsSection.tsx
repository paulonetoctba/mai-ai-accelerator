import { Check, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const benefits = [
  "Visão 360º de Investimento até Receita",
  "ROI ponta a ponta, não métricas de vaidade",
  "Diagnóstico automático de gargalos",
  "Otimizações com impacto financeiro real",
  "Projeções de crescimento inteligentes",
];

const metrics = [
  { label: "ROI Acumulado", value: 247, suffix: "%", prefix: "+" },
  { label: "Redução do CAC", value: 38, suffix: "%", prefix: "-" },
  { label: "Receita Incremental", value: 89, suffix: "%", prefix: "+" },
];

const AnimatedCounter = ({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-4xl md:text-5xl font-bold font-heading gradient-text">
      {prefix}{count}{suffix}
    </span>
  );
};

const BenefitsSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
            O Que Você Ganha
            <br />
            <span className="gradient-text">com a MAI 360º</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 glass-card p-4 rounded-xl group hover:scale-[1.02] transition-transform animate-slide-in-left opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <span className="text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl text-center group hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_40px_hsl(180_100%_50%/0.15)] animate-scale-in opacity-0"
                style={{ animationDelay: `${0.5 + index * 0.2}s` }}
              >
                <AnimatedCounter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                <p className="text-muted-foreground mt-2 text-lg">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="mailto:maiplataforma@gmail.com">
            <Button variant="neon" size="xl">
              <Rocket className="w-5 h-5" />
              Quero Esses Resultados
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
