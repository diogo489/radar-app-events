const stack = [
  { name: "JavaScript", desc: "Lógica do app" },
  { name: "React Native", desc: "App mobile" },
  { name: "PHP", desc: "Backend & API" },
  { name: "HTML5", desc: "Estrutura web" },
  { name: "Bootstrap", desc: "Estilização" },
];

export const TechStack = () => {
  return (
    <section id="sobre" className="py-24 border-y border-border bg-background relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
              // Stack
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Construído com tecnologia <span className="text-gradient">de ponta.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Performance e confiabilidade em cada camada. Do backend robusto em PHP ao
              app mobile fluido em React Native — cada peça foi escolhida pra entregar
              a melhor experiência.
            </p>
          </div>

          <div className="space-y-px bg-border">
            {stack.map((s, i) => (
              <div
                key={s.name}
                className="flex items-center justify-between bg-card hover:bg-secondary p-5 group transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-bold text-lg">{s.name}</span>
                </div>
                <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                  {s.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
