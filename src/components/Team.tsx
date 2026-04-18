import { Github, Phone } from "lucide-react";

const members = [
  { name: "Arthur", phone: "999567***", handle: "arthurmofranca-del" },
  { name: "Diogo", phone: "999678***", handle: "diogo489" },
  { name: "Denise", phone: "999241***", handle: "denisesantos123" },
  { name: "Nathalia", phone: "999352***", handle: "nathalialopes711-ai" },
  { name: "Vinicius", phone: "999431***", handle: "vmdpereira" },
];

export const Team = () => {
  return (
    <section id="equipe" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            // Equipe
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            As mentes por trás<br />
            <span className="text-gradient">do sinal.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Cinco devs, uma missão: conectar pessoas aos eventos certos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {members.map((m, i) => (
            <div
              key={m.handle}
              className="group relative p-6 bg-card border border-border hover:border-primary transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-red opacity-0 group-hover:opacity-10 transition-opacity" />

              <div className="font-mono text-xs text-primary mb-4">
                #{String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative w-16 h-16 rounded-full bg-gradient-red flex items-center justify-center mb-4 glow-red group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-primary-foreground">
                  {m.name[0]}
                </span>
                <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-radar-pulse" />
              </div>

              <h3 className="text-lg font-bold mb-1 tracking-tight">{m.name}</h3>

              <div className="space-y-1.5 text-xs font-mono text-muted-foreground mt-3 pt-3 border-t border-border">
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 text-primary" />
                  <span>{m.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-3 w-3 text-primary" />
                  <span className="truncate">{m.handle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
