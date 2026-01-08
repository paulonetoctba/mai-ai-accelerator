import { Rocket, Crown, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import rocketImage from "@/assets/rocket-launch.png";

const emailSchema = z.string().email("Por favor, insira um e-mail válido");


const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4">
      {[
        { value: timeLeft.days, label: "Dias" },
        { value: timeLeft.hours, label: "Horas" },
        { value: timeLeft.minutes, label: "Min" },
        { value: timeLeft.seconds, label: "Seg" },
      ].map((item, index) => (
        <div key={index} className="text-center">
          <div className="glass-card w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center mb-2 glow-pulse">
            <span className="text-2xl md:text-3xl font-bold font-heading gradient-text">
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const LaunchSection = () => {
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
    const subject = encodeURIComponent("Quero ser Fundador do MAI");
    const body = encodeURIComponent(`Olá! Meu email é: ${email}\n\nQuero participar do programa de fundadores do MAI.`);
    window.location.href = `mailto:maiplataforma@gmail.com?subject=${subject}&body=${body}`;
    
    // Redirect to thank you page after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/obrigado");
    }, 500);
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Rocket Image */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />
            <img 
              src={rocketImage} 
              alt="Foguete representando crescimento" 
              className="w-full max-w-md mx-auto relative z-10 drop-shadow-2xl"
              loading="lazy"
            />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-3xl text-center border-2 border-primary/20 shadow-[0_0_60px_hsl(180_100%_50%/0.1)]">
          {/* Founder badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Founder Access</span>
          </div>

          {/* Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Lançamento Semente
            <br />
            <span className="gradient-text">Acesso Antecipado Exclusivo</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Estamos liberando acesso para um <span className="text-foreground font-semibold">grupo limitado</span> de 
            usuários fundadores que irão:
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              "Influenciar o roadmap",
              "Acessar funcionalidades premium",
              "Condições especiais vitalícias",
            ].map((benefit, index) => (
              <div key={index} className="glass-button p-4 rounded-xl">
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Countdown */}
          <div className="mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Timer className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Oferta expira em:</span>
            </div>
            <CountdownTimer />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 bg-card/50 border-border/50 text-center text-lg placeholder:text-muted-foreground/50"
              required
            />
            <Button 
              type="submit" 
              variant="neon" 
              size="xl" 
              className="w-full"
              disabled={isSubmitting}
            >
              <Rocket className="w-5 h-5" />
              {isSubmitting ? "Enviando..." : "Quero Ser Fundador do MAI"}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            🔒 Seus dados estão seguros. Não enviamos spam.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchSection;
