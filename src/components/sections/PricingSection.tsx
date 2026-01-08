import { Button } from "@/components/ui/button";
import { Check, Rocket, Building2, Crown, TrendingUp, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/mês",
    description: "Ideal para pequenos times e freelancers",
    icon: Rocket,
    color: "primary",
    features: [
      "Ferramentas de Redação com IA",
      "Criação Audiovisual automatizada",
      "Gerenciamento de campanhas centralizadas",
      "Suporte por email",
      "5 usuários inclusos",
    ],
    cta: "Começar Agora",
    popular: false,
  },
  {
    name: "Business",
    price: "$999",
    period: "/mês",
    description: "Para empresas em crescimento acelerado",
    icon: Building2,
    color: "accent",
    features: [
      "Tudo do plano Starter",
      "CRM completo integrado",
      "Inbound Marketing automatizado",
      "Análises avançadas e relatórios",
      "Usuários ilimitados",
      "Suporte prioritário",
    ],
    cta: "Escolher Business",
    popular: true,
  },
  {
    name: "Corporate",
    price: "Sob Consulta",
    period: "",
    description: "Soluções enterprise personalizadas",
    icon: Crown,
    color: "secondary",
    features: [
      "Tudo dos planos anteriores",
      "Enriquecimento de conteúdos de produtos",
      "Integrações customizadas",
      "SLA garantido",
      "Gerente de conta dedicado",
      "Treinamento personalizado",
    ],
    cta: "Falar com Especialista",
    popular: false,
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Tudo em um só lugar",
    description: "Otimização do gerenciamento de ferramentas de IA centralizadas",
  },
  {
    icon: TrendingUp,
    title: "ROI Comprovado",
    description: "Redução de custos e ganhos operacionais mensuráveis",
  },
];

const PricingSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">
              Planos flexíveis para cada necessidade
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Escolha o Plano
            <br />
            <span className="gradient-text">Ideal Para Você</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Invista no crescimento do seu negócio com as melhores ferramentas de IA do mercado
          </p>
        </div>

        {/* Benefits highlight */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl flex items-start gap-4 hover:scale-[1.02] transition-transform"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isPopular = plan.popular;
            
            return (
              <div
                key={index}
                className={`relative glass-card rounded-3xl p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                  isPopular
                    ? "border-2 border-accent/50 shadow-[0_0_40px_hsl(150_100%_50%/0.2)]"
                    : ""
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                    Mais Popular
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-8">
                  <div
                    className={`inline-flex w-16 h-16 rounded-2xl items-center justify-center mb-4 ${
                      plan.color === "primary"
                        ? "bg-primary/20 border border-primary/30"
                        : plan.color === "accent"
                        ? "bg-accent/20 border border-accent/30"
                        : "bg-secondary/20 border border-secondary/30"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 ${
                        plan.color === "primary"
                          ? "text-primary"
                          : plan.color === "accent"
                          ? "text-accent"
                          : "text-secondary"
                      }`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          plan.color === "primary"
                            ? "bg-primary/20"
                            : plan.color === "accent"
                            ? "bg-accent/20"
                            : "bg-secondary/20"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.color === "primary"
                              ? "text-primary"
                              : plan.color === "accent"
                              ? "text-accent"
                              : "text-secondary"
                          }`}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a href="mailto:maiplataforma@gmail.com" className="w-full">
                  <Button
                    variant={isPopular ? "neon" : "glass"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </a>
              </div>
            );
          })}
        </div>

        {/* Trust badge */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm mb-4">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex items-center justify-center gap-8 opacity-50">
            <div className="h-8 w-24 bg-muted/30 rounded" />
            <div className="h-8 w-20 bg-muted/30 rounded" />
            <div className="h-8 w-28 bg-muted/30 rounded" />
            <div className="h-8 w-24 bg-muted/30 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
