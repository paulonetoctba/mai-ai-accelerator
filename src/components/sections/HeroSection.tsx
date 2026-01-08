import { Button } from "@/components/ui/button";
import { Rocket, Play, Lightbulb, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse animation-delay-200" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">
            Vagas limitadas para early adopters
          </span>
          <span className="px-2 py-0.5 text-xs font-semibold bg-primary/20 text-primary rounded-full">
            NOVO
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
          O Futuro do Marketing
          <br />
          <span className="gradient-text">Não Usa Ferramentas.</span>
          <br />
          <span className="text-foreground">Usa Inteligência.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-semibold text-primary/80 mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s" }}>
          Software SaaS Agregador de IAs
        </p>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
          O <span className="text-primary font-semibold">MAI – Marketing Artificial Intelligence</span> une 
          as melhores IAs do mercado em uma única plataforma para transformar dados em vendas, 
          conteúdo em conversão e estratégia em escala.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }}>
          <a href="mailto:maiplataforma@gmail.com">
            <Button variant="neon" size="xl" className="w-full sm:w-auto">
              <Rocket className="w-5 h-5" />
              Entrar na Lista VIP
            </Button>
          </a>
          <a href="mailto:maiplataforma@gmail.com">
            <Button variant="neon-outline" size="lg" className="w-full sm:w-auto">
              <Play className="w-5 h-5" />
              Ver Como Funciona
            </Button>
          </a>
          <a href="mailto:maiplataforma@gmail.com">
            <Button variant="glass" size="lg" className="w-full sm:w-auto">
              <Lightbulb className="w-5 h-5" />
              Quero Acessar Primeiro
            </Button>
          </a>
        </div>

        {/* Platform Mockup */}
        <div className="relative animate-scale-in opacity-0" style={{ animationDelay: "0.8s" }}>
          <div className="glass-card p-2 rounded-3xl glow-pulse">
            <div className="relative bg-card rounded-2xl overflow-hidden aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
              
              {/* Mock Dashboard UI */}
              <div className="p-6 h-full flex flex-col">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-24 bg-muted/50 rounded-md" />
                    <div className="h-6 w-6 bg-primary/30 rounded-md" />
                  </div>
                </div>

                {/* Dashboard grid */}
                <div className="flex-1 grid grid-cols-4 gap-4">
                  <div className="col-span-1 space-y-3">
                    <div className="h-8 w-full bg-muted/30 rounded-lg" />
                    <div className="h-6 w-3/4 bg-muted/20 rounded-lg" />
                    <div className="h-6 w-1/2 bg-muted/20 rounded-lg" />
                    <div className="h-6 w-2/3 bg-muted/20 rounded-lg" />
                    <div className="h-6 w-3/4 bg-primary/20 rounded-lg" />
                  </div>
                  <div className="col-span-3 grid grid-cols-3 gap-4">
                    <div className="glass-card p-4 flex flex-col justify-between">
                      <div className="h-3 w-16 bg-primary/40 rounded" />
                      <div className="text-2xl font-bold text-primary">+247%</div>
                      <div className="h-2 w-12 bg-muted/30 rounded" />
                    </div>
                    <div className="glass-card p-4 flex flex-col justify-between">
                      <div className="h-3 w-16 bg-secondary/40 rounded" />
                      <div className="text-2xl font-bold text-secondary">-38%</div>
                      <div className="h-2 w-12 bg-muted/30 rounded" />
                    </div>
                    <div className="glass-card p-4 flex flex-col justify-between">
                      <div className="h-3 w-16 bg-accent/40 rounded" />
                      <div className="text-2xl font-bold text-accent">+89%</div>
                      <div className="h-2 w-12 bg-muted/30 rounded" />
                    </div>
                    <div className="col-span-2 glass-card p-4">
                      <div className="h-3 w-24 bg-muted/30 rounded mb-4" />
                      <div className="h-20 w-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-lg" />
                    </div>
                    <div className="glass-card p-4">
                      <div className="h-3 w-20 bg-muted/30 rounded mb-4" />
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-primary/30 rounded" />
                        <div className="h-2 w-4/5 bg-secondary/30 rounded" />
                        <div className="h-2 w-3/5 bg-accent/30 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
