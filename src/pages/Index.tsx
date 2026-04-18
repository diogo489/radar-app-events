import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Team } from "@/components/Team";
import { Download } from "@/components/Download";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Features />
        <HowItWorks />
        <Team />
        <Download />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
