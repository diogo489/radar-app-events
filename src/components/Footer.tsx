import { RadarLogo } from "./RadarLogo";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <RadarLogo />
        <p className="text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} RADAR.APP — Todos os sinais reservados.
        </p>
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-primary animate-blink" />
          STATUS: ONLINE
        </div>
      </div>
    </footer>
  );
};
