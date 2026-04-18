import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

export const Download = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-radar opacity-50" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center p-12 md:p-16 border border-primary/40 bg-card/80 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-blink" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              Disponível agora
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Pronto pra <span className="text-gradient">ligar o radar?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Baixe o Radar App e descubra um mundo de eventos que você nem sabia que existiam.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              <Apple className="h-5 w-5" /> App Store
            </Button>
            <Button variant="outlineRed" size="xl">
              <Smartphone className="h-5 w-5" /> Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
