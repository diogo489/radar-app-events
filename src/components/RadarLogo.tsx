import { Radar } from "lucide-react";

export const RadarLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Radar className="h-7 w-7 text-primary" strokeWidth={2.5} />
        <div className="absolute inset-0 animate-blink">
          <Radar className="h-7 w-7 text-primary blur-sm" strokeWidth={2.5} />
        </div>
      </div>
      <span className="font-bold text-xl tracking-tight">
        RADAR<span className="text-primary">.</span>APP
      </span>
    </div>
  );
};
