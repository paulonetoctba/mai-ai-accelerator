import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in" style={{ animationDelay: "2s" }}>
      <Button 
        variant="neon" 
        size="lg" 
        className="rounded-full shadow-[0_0_30px_hsl(180_100%_50%/0.4)] hover:shadow-[0_0_50px_hsl(180_100%_50%/0.6)]"
      >
        <Rocket className="w-5 h-5" />
        <span className="hidden sm:inline">Quero Entrar</span>
      </Button>
    </div>
  );
};

export default FloatingCTA;
