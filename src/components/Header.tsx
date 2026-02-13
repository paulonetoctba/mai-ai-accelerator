import { Brain } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-10 left-0 right-0 z-40 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="glass-card px-6 py-4 rounded-2xl flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-heading gradient-text leading-none">MAI</span>
              <span className="text-[9px] text-muted-foreground leading-none">Intelligence 360º</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#ecossistema" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Ecossistema
            </a>
            <a href="#dashboard-preview" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </a>
            <a href="#beneficios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Benefícios
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA */}
          <a 
            href="mailto:maiplataforma@gmail.com" 
            className="px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Solicitar Acesso
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
