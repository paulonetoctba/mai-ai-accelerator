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
    question: "A MAI é um CRM?",
    answer: "Não. A MAI não é CRM, não é BI tradicional e não usa planilhas. A MAI é o cérebro estratégico que conecta mídia, vendas e analytics em um único ecossistema inteligente, gerando insights automatizados de ponta a ponta.",
  },
  {
    question: "Quais plataformas a MAI integra?",
    answer: "A MAI integra mídia (Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads, YouTube Ads), canais de venda (Shopify, VTEX, WooCommerce, Landing Pages, Checkouts, Marketplaces, WhatsApp Business API) e analytics (Google Analytics 4, Pixels, Eventos, APIs proprietárias e dados comportamentais).",
  },
  {
    question: "Como a MAI calcula o ROI real?",
    answer: "A MAI rastreia todo o caminho: Investimento → Tráfego → Engajamento → Conversão → Receita → ROI. Ao cruzar dados de mídia com dados de venda reais, a MAI consegue mostrar o impacto financeiro real de cada canal e campanha.",
  },
  {
    question: "A MAI funciona para e-commerces?",
    answer: "Sim! A MAI é ideal para e-commerces. Ela conecta suas plataformas de mídia paga diretamente ao checkout, permitindo ver o ROAS real (não estimado), identificar gargalos de conversão e otimizar investimentos com base em receita, não cliques.",
  },
  {
    question: "Preciso de equipe técnica para implementar?",
    answer: "Não. A MAI foi projetada para ser intuitiva. As integrações são feitas em minutos via API, e o dashboard inteligente já entrega insights prontos para ação. Sem necessidade de analistas de dados ou engenheiros.",
  },
  {
    question: "Qual o diferencial da MAI frente ao Google Analytics?",
    answer: "O GA4 mostra dados de comportamento e tráfego. A MAI vai além: ela cruza os dados do GA4 com dados de mídia paga e vendas reais, gerando uma visão 360º que conecta investimento à receita e gera recomendações acionáveis automaticamente.",
  },
];

const FAQSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container max-w-4xl mx-auto">
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

        <div className="text-center mt-12">
          <a href="mailto:maiplataforma@gmail.com">
            <Button variant="neon" size="lg">
              Solicitar Acesso à MAI
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
