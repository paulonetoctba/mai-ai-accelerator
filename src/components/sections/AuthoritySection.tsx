import { Award, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const technologies = [
  "OpenAI", "Google AI", "Meta AI", "AWS", "GCP", "Azure"
];

const testimonials = [
  {
    quote: "O MAI mudou completamente nossa forma de fazer marketing. Resultados em dias, não meses.",
    author: "Beta Tester",
    role: "CEO, Tech Startup",
  },
  {
    quote: "Finalmente uma ferramenta que entende o que precisamos antes de pedirmos.",
    author: "Beta Tester",
    role: "CMO, E-commerce",
  },
  {
    quote: "A integração de IAs é absurda. É como ter uma equipe inteira trabalhando 24/7.",
    author: "Beta Tester",
    role: "Growth Lead, SaaS",
  },
];

const AuthoritySection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Especialistas em Marketing, Dados e IA</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Criado por Quem
            <br />
            <span className="gradient-text">Entende de Resultados</span>
          </h2>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <p className="text-center text-muted-foreground mb-8">Tecnologias que impulsionam o MAI:</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="glass-button px-6 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
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

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="neon-outline" size="lg">
            <MessageSquare className="w-5 h-5" />
            Quero Participar do Beta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
