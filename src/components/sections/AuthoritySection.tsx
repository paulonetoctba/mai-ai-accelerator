import { Award, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const integrations = [
  "Google Ads", "Meta Ads", "Google Analytics 4", "Shopify", "VTEX", "WhatsApp API"
];

const testimonials = [
  {
    quote: "Pela primeira vez conseguimos ver investimento até receita em um único painel. O ROI ficou cristalino.",
    author: "Beta Tester",
    role: "CMO, E-commerce",
  },
  {
    quote: "A MAI identificou gargalos que estávamos perdendo há meses. Economia imediata de 30% no CAC.",
    author: "Beta Tester",
    role: "Growth Lead, SaaS",
  },
  {
    quote: "Não é BI tradicional. É inteligência real que conecta mídia, vendas e analytics de verdade.",
    author: "Beta Tester",
    role: "Diretor de Marketing, Varejo",
  },
];

const AuthoritySection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Ecossistema conectado com as maiores plataformas</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Integrações que
            <br />
            <span className="gradient-text">Fazem a Diferença</span>
          </h2>
        </div>

        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {integrations.map((tech, index) => (
              <div
                key={index}
                className="glass-button px-6 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform"
            >
              <MessageSquare className="w-8 h-8 text-primary/50 mb-4" />
              <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="mailto:maiplataforma@gmail.com">
            <Button variant="neon-outline" size="lg">
              <MessageSquare className="w-5 h-5" />
              Solicitar Acesso
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
