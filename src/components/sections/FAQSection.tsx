import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "O MAI substitui as ferramentas que eu já uso?",
    answer: "O MAI pode integrar-se às suas ferramentas atuais ou substituí-las completamente. Nossa plataforma foi projetada para orquestrar múltiplas IAs, então você pode começar integrando e, gradualmente, migrar completamente conforme vê os resultados.",
  },
  {
    question: "Preciso saber sobre IA para usar o MAI?",
    answer: "Não! O MAI foi criado para ser intuitivo e acessível. Você define seus objetivos em linguagem simples, e a plataforma cuida de toda a complexidade técnica. É marketing inteligente, não engenharia de prompts.",
  },
  {
    question: "Quando terei acesso à plataforma?",
    answer: "Os fundadores da lista VIP terão acesso prioritário nas próximas semanas. Estamos liberando em ondas para garantir a melhor experiência possível. Quanto antes você entrar na lista, mais cedo terá acesso.",
  },
  {
    question: "O MAI funciona para pequenas empresas?",
    answer: "Absolutamente! O MAI foi projetado para escalar desde empreendedores solo até grandes corporações. Nossa precificação será flexível e baseada em uso, tornando-o acessível para negócios de todos os tamanhos.",
  },
  {
    question: "Como funciona o suporte?",
    answer: "Fundadores VIP terão acesso a suporte prioritário via chat e calls exclusivas. Além disso, nossa comunidade de early adopters será um espaço valioso para troca de experiências e melhores práticas.",
  },
];

const FAQSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Tire suas dúvidas</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading">
            Perguntas
            <br />
            <span className="gradient-text">Frequentes</span>
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card rounded-2xl border-none overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:no-underline hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="neon" size="lg">
            Ainda Quero Entrar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
