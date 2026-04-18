import { MapPin, Filter, Bell, Users, Calendar, Zap } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Geolocalização precisa",
    desc: "Veja eventos a metros de você, com rotas direto do app.",
  },
  {
    icon: Filter,
    title: "Filtros inteligentes",
    desc: "Música, esporte, gastronomia, arte. Você escolhe o que quer ver.",
  },
  {
    icon: Bell,
    title: "Alertas em tempo real",
    desc: "Notificações quando rolar algo do seu interesse por perto.",
  },
  {
    icon: Calendar,
    title: "Agenda integrada",
    desc: "Salve eventos e sincronize com o calendário do seu celular.",
  },
  {
    icon: Users,
    title: "Para todo mundo",
    desc: "Família, baladeiros, esportistas, artistas — todos cabem aqui.",
  },
  {
    icon: Zap,
    title: "Rápido e leve",
    desc: "Construído em React Native. Roda fluido até em conexão fraca.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            // Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Tudo que rola.<br />
            <span className="text-gradient">No seu bolso.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Um arsenal de ferramentas pra você nunca mais perder um evento legal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative bg-background p-8 hover:bg-card transition-colors duration-300"
            >
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
              <f.icon className="h-8 w-8 text-primary mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3 tracking-tight">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
