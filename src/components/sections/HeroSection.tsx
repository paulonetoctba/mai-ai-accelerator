import { Button } from "@/components/ui/button";
import { Rocket, Play, ArrowRight, Sparkles } from "lucide-react";

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
            A primeira plataforma de Marketing Intelligence 360º
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
          MAI — Marketing
          <br />
          <span className="gradient-text">Intelligence 360º</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-semibold text-primary/80 mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s" }}>
          Integramos mídia, vendas e analytics para gerar insights que multiplicam seu ROI.
        </p>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
          Não analisamos canais isolados.{" "}
          <span className="text-foreground font-semibold">Analisamos o ecossistema completo.</span>
        </p>

        {/* Differentiator badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: "0.5s" }}>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-destructive/15 text-destructive border border-destructive/20">
            ✕ NÃO é CRM
          </span>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-destructive/15 text-destructive border border-destructive/20">
            ✕ NÃO é BI tradicional
          </span>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-destructive/15 text-destructive border border-destructive/20">
            ✕ NÃO usa planilhas
          </span>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/15 text-accent border border-accent/20">
            ✓ Cérebro estratégico 360º
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s" }}>
          <a href="mailto:maiplataforma@gmail.com">
            <Button variant="neon" size="xl" className="w-full sm:w-auto">
              <Rocket className="w-5 h-5" />
              Solicitar Acesso
            </Button>
          </a>
          <a href="#dashboard-preview">
            <Button variant="neon-outline" size="lg" className="w-full sm:w-auto">
              <Play className="w-5 h-5" />
              Ver Dashboard 360º
            </Button>
          </a>
          <a href="#ecossistema">
            <Button variant="glass" size="lg" className="w-full sm:w-auto">
              <ArrowRight className="w-5 h-5" />
              Conhecer o Ecossistema
            </Button>
          </a>
        </div>

        {/* Ecosystem Visual */}
        <div className="relative animate-scale-in opacity-0" style={{ animationDelay: "0.8s" }}>
          <div className="glass-card p-2 rounded-3xl glow-pulse">
            <div className="relative bg-card rounded-2xl overflow-hidden aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
              
              {/* 360° Flow visualization */}
              <div className="p-6 h-full flex flex-col">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-32 bg-muted/50 rounded-md flex items-center justify-center">
                      <span className="text-[10px] text-muted-foreground">MAI Dashboard 360º</span>
                    </div>
                  </div>
                </div>

                {/* Flow: Investimento → Tráfego → Engajamento → Conversão → Receita → ROI */}
                <div className="flex-1 flex flex-col gap-4">
                  {/* Flow indicators */}
                  <div className="hidden md:flex items-center justify-between gap-2">
                    {["Investimento", "Tráfego", "Engajamento", "Conversão", "Receita", "ROI"].map((label, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`px-3 py-1.5 rounded-lg text-[10px] font-medium ${
                          i === 5 ? "bg-accent/20 text-accent border border-accent/30" : "bg-primary/10 text-primary border border-primary/20"
                        }`}>
                          {label}
                        </div>
                        {i < 5 && <ArrowRight className="w-3 h-3 text-muted-foreground/50" />}
                      </div>
                    ))}
                  </div>

                  {/* Dashboard grid */}
                  <div className="flex-1 grid grid-cols-4 gap-4">
                    <div className="col-span-1 space-y-3">
                      <div className="h-8 w-full bg-muted/30 rounded-lg flex items-center px-2">
                        <span className="text-[9px] text-muted-foreground">📡 Mídia</span>
                      </div>
                      <div className="h-6 w-3/4 bg-primary/20 rounded-lg" />
                      <div className="h-8 w-full bg-muted/30 rounded-lg flex items-center px-2">
                        <span className="text-[9px] text-muted-foreground">🛒 Vendas</span>
                      </div>
                      <div className="h-6 w-2/3 bg-secondary/20 rounded-lg" />
                      <div className="h-8 w-full bg-muted/30 rounded-lg flex items-center px-2">
                        <span className="text-[9px] text-muted-foreground">📊 Analytics</span>
                      </div>
                    </div>
                    <div className="col-span-3 grid grid-cols-3 gap-4">
                      <div className="glass-card p-4 flex flex-col justify-between">
                        <div className="h-3 w-16 bg-primary/40 rounded" />
                        <div className="text-2xl font-bold text-primary">+247%</div>
                        <div className="text-[9px] text-muted-foreground">ROI acumulado</div>
                      </div>
                      <div className="glass-card p-4 flex flex-col justify-between">
                        <div className="h-3 w-16 bg-accent/40 rounded" />
                        <div className="text-2xl font-bold text-accent">-38%</div>
                        <div className="text-[9px] text-muted-foreground">CAC vs LTV</div>
                      </div>
                      <div className="glass-card p-4 flex flex-col justify-between">
                        <div className="h-3 w-16 bg-secondary/40 rounded" />
                        <div className="text-2xl font-bold text-secondary">+89%</div>
                        <div className="text-[9px] text-muted-foreground">Receita incremental</div>
                      </div>
                      <div className="col-span-2 glass-card p-4">
                        <div className="text-[9px] text-muted-foreground mb-2">Performance 360º</div>
                        <div className="h-20 w-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-lg" />
                      </div>
                      <div className="glass-card p-4">
                        <div className="text-[9px] text-muted-foreground mb-2">Insights IA</div>
                        <div className="space-y-2">
                          <div className="h-2 w-full bg-primary/30 rounded" />
                          <div className="h-2 w-4/5 bg-accent/30 rounded" />
                          <div className="h-2 w-3/5 bg-secondary/30 rounded" />
                        </div>
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
