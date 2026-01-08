import { AlertTriangle, Layers, Clock, TrendingDown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: Layers,
    text: "Muitas ferramentas, pouco controle",
  },
  {
    icon: TrendingDown,
    text: "Dados espalhados, decisões lentas",
  },
  {
    icon: AlertTriangle,
    text: "Conteúdo genérico, baixo ROI",
  },
  {
    icon: Users,
    text: "Equipes sobrecarregadas",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-8">
              O Marketing Está
              <br />
              <span className="text-destructive">Fragmentado.</span>
              <br />
              O Resultado Também.
            </h2>

            <div className="space-y-6 mb-10">
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
                  É excesso sem inteligência central."
                </span>
              </p>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-destructive/10 via-transparent to-transparent" />
            
            {/* Fragmented tools illustration */}
            <div className="relative grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square glass-card flex items-center justify-center group hover:border-destructive/50 transition-all duration-300"
                  style={{
                    transform: `rotate(${(i - 4) * 2}deg) translate(${(i % 3 - 1) * 5}px, ${Math.floor(i / 3 - 1) * 5}px)`,
                  }}
                >
                  <div className="w-8 h-8 rounded-lg bg-muted/50 group-hover:bg-destructive/20 transition-colors" />
                </div>
              ))}
              
              {/* Chaos lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                <line x1="20%" y1="20%" x2="80%" y2="80%" stroke="hsl(0 84% 60%)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="80%" y1="20%" x2="20%" y2="80%" stroke="hsl(0 84% 60%)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="hsl(0 84% 60%)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Floating CTA */}
        <div className="mt-16 text-center">
          <a href="mailto:maiplataforma@gmail.com">
            <Button variant="neon" size="lg">
              Quero Simplificar Meu Marketing
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
