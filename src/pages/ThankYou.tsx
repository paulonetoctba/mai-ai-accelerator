import { CheckCircle, Home, ArrowLeft, Sparkles, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ThankYou = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse animation-delay-200" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle bg-primary/30"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 6 + "s",
              animationDuration: Math.random() * 4 + 4 + "s",
            }}
          />
        ))}
      </div>

      <div className={`relative z-10 text-center max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Success icon */}
        <div className="relative inline-flex mb-8">
          <div className="w-32 h-32 rounded-full bg-accent/20 border-2 border-accent/50 flex items-center justify-center glow-pulse">
            <CheckCircle className="w-16 h-16 text-accent" />
          </div>
          <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-primary animate-pulse" />
        </div>

        {/* Main content */}
        <div className="glass-card p-8 md:p-12 rounded-3xl border-2 border-primary/20 shadow-[0_0_60px_hsl(180_100%_50%/0.1)]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="gradient-text">Obrigado!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Sua solicitação foi recebida com sucesso.
          </p>
          
          <p className="text-lg text-muted-foreground mb-8">
            Em breve, nossa equipe entrará em contato pelo e-mail informado. 
            Fique atento à sua caixa de entrada!
          </p>

          {/* Benefits reminder */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              "Acesso prioritário",
              "Condições especiais",
              "Suporte exclusivo",
            ].map((benefit, index) => (
              <div
                key={index}
                className="glass-button p-4 rounded-xl text-sm text-muted-foreground hover:text-foreground transition-colors"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <Rocket className="w-5 h-5 text-primary mx-auto mb-2" />
                {benefit}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button variant="neon" size="lg">
                <Home className="w-5 h-5" />
                Voltar à Página Inicial
              </Button>
            </Link>
            <Link to="/#planos">
              <Button variant="glass" size="lg">
                <ArrowLeft className="w-5 h-5" />
                Ver Nossos Planos
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer message */}
        <p className="text-sm text-muted-foreground mt-8">
          🔒 Seus dados estão protegidos. Não enviamos spam.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
