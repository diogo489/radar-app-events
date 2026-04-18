import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadarLogo } from "./RadarLogo";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#features", label: "Features" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#equipe", label: "Equipe" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <nav className="container flex items-center justify-between h-16">
        <a href="#top" aria-label="Radar App"><RadarLogo /></a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <a href="#download">Baixar app</a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" size="sm" asChild>
              <a href="#download">Baixar app</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
