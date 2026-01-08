import { Rocket, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z.string().email("Por favor, insira um e-mail válido");

const FinalCTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    
    // Open mailto with the email
    const subject = encodeURIComponent("Quero entrar na Lista VIP do MAI");
    const body = encodeURIComponent(`Olá! Meu email é: ${email}\n\nQuero entrar na lista VIP do MAI.`);
    window.location.href = `mailto:maiplataforma@gmail.com?subject=${subject}&body=${body}`;
    
    // Redirect to thank you page after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/obrigado");
    }, 500);
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container max-w-4xl mx-auto relative z-10 text-center">
        {/* Main headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-heading mb-6">
          O Marketing do Futuro
          <br />
          <span className="gradient-text">Começa com Uma Decisão Hoje.</span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Garanta seu acesso antecipado ao <span className="text-primary font-semibold">MAI – Marketing Artificial Intelligence</span> e 
          lidere o mercado antes da concorrência.
        </p>

        {/* Email capture */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 bg-card/50 border-border/50 text-lg flex-1"
              required
            />
            <Button 
              type="submit" 
              variant="neon" 
              size="lg" 
              className="h-14"
              disabled={isSubmitting}
            >
              <Rocket className="w-5 h-5" />
              {isSubmitting ? "Enviando..." : "Entrar na Lista VIP"}
            </Button>
          </div>
        </form>

        {/* Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:maiplataforma@gmail.com?subject=Solicitar%20Acesso%20Antecipado">
            <Button variant="neon-outline" size="lg">
              <Calendar className="w-5 h-5" />
              Solicitar Acesso Antecipado
            </Button>
          </a>
          <a href="mailto:maiplataforma@gmail.com?subject=Falar%20com%20Especialista">
            <Button variant="glass" size="lg">
              <MessageCircle className="w-5 h-5" />
              Falar com Especialista
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
