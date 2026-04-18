import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Zap } from "lucide-react";
import heroImg from "@/assets/radar-hero.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Radar App detectando eventos próximos"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      {/* Animated radar rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-primary/40 animate-radar-pulse"
            style={{ animationDelay: `${i * 1}s` }}
          />
        ))}
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-blink" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              Sinal ativo • 24/7
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95]">
            EVENTOS<br />
            <span className="text-gradient text-glow">NO SEU</span><br />
            RADAR.
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Encontre shows, festas, esportes, exposições e tudo que está rolando perto de você —
            em tempo real, com um toque.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#download">
                Baixar agora <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button variant="outlineRed" size="xl" asChild>
              <a href="#como-funciona">Ver como funciona</a>
            </Button>
          </div>

          <div className="flex gap-8 pt-4 border-t border-border/50">
            <Stat value="50K+" label="Eventos mapeados" />
            <Stat value="120" label="Cidades" />
            <Stat value="4.9" label="Avaliação" />
          </div>
        </div>

        <div className="relative hidden lg:flex justify-center items-center">
          <div className="absolute inset-0 bg-radar opacity-60" />
          <img
            src="/src/assets/radar-phone.png"
            alt="Tela do Radar App"
            className="relative w-full max-w-md animate-float drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 0 60px hsl(var(--primary) / 0.6))' }}
          />

          {/* Floating chips */}
          <FloatingChip icon={<MapPin className="h-3 w-3" />} className="top-10 left-0" delay="0s">
            Festa Underground · 1.2 km
          </FloatingChip>
          <FloatingChip icon={<Zap className="h-3 w-3" />} className="bottom-20 right-0" delay="2s">
            Show ao vivo · agora
          </FloatingChip>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="text-2xl font-bold text-primary font-mono">{value}</div>
    <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
  </div>
);

const FloatingChip = ({
  children,
  icon,
  className,
  delay,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
  delay?: string;
}) => (
  <div
    className={`absolute flex items-center gap-2 px-3 py-2 bg-card border border-primary/40 rounded-md shadow-glow text-xs font-mono animate-float ${className}`}
    style={{ animationDelay: delay }}
  >
    <span className="text-primary">{icon}</span>
    {children}
  </div>
);
