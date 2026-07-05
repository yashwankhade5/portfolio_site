import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Timeline } from "@/components/timeline";
import { Contact } from "@/components/contact";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full selection:bg-primary/20 selection:text-primary">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      
      <footer className="py-6 text-center text-sm text-muted-foreground font-mono border-t border-border/40">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} {portfolio.personal.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}