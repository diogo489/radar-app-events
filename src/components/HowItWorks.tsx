const steps = [
  {
    n: "01",
    title: "Baixe o app",
    desc: "Disponível para iOS e Android. Instalação em segundos.",
  },
  {
    n: "02",
    title: "Ative o radar",
    desc: "Permita o acesso à localização e escolha o raio de busca.",
  },
  {
    n: "03",
    title: "Descubra eventos",
    desc: "Veja no mapa em tempo real tudo o que está acontecendo.",
  },
  {
    n: "04",
    title: "Vai e curte",
    desc: "Toque em ir, abra o GPS e aproveite. Simples assim.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 bg-card border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="container relative">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            // Como funciona
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Quatro passos.<br />
            <span className="text-gradient">Zero complicação.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative group p-6 border border-border bg-background hover:border-primary transition-all duration-300"
            >
              <div className="font-mono text-5xl font-bold text-primary/30 group-hover:text-primary transition-colors mb-4">
                {s.n}
              </div>
              <h3 className="text-lg font-bold mb-2 tracking-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
