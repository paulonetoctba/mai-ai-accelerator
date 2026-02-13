import { Zap, Globe } from "lucide-react";

const ScarcityBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/90 via-secondary/90 to-primary/90 py-2 px-4">
      <div className="container max-w-6xl mx-auto flex items-center justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span className="font-semibold text-primary-foreground">Marketing Intelligence 360º</span>
        </div>
        <div className="hidden sm:block h-4 w-px bg-primary-foreground/30" />
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4" />
          <span className="text-primary-foreground/90">Mídia + Vendas + Analytics em um só lugar</span>
        </div>
      </div>
    </div>
  );
};

export default ScarcityBar;
