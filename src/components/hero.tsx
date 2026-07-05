import { portfolio } from "@/data/portfolio";
import { MapPin } from "lucide-react";

export function Hero() {
  const { personal, links } = portfolio;
  
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="flex h-2 w-2 rounded-full bg-primary"></span>
            {personal.subtext}
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            {personal.name}
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
            {personal.title}
          </p>
          
          <div className="flex items-center gap-2 text-muted-foreground mt-2">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{personal.location}</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mt-6">
            {links.map((link) => {
              const Icon = link.icon;
              if (link.isButton) {
                if (!link.url) return null;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {link.name}
                  </a>
                );
              }
              if (!link.url) return null;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background transition-colors hover:bg-accent hover:text-foreground text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  aria-label={link.name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}