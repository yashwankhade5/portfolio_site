import { portfolio } from "@/data/portfolio";

export function Contact() {
  const { links } = portfolio;
  
  return (
    <section id="contact" className="py-24 border-t border-border/40">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Get In Touch</h2>
        <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-8"></div>
        
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
          Currently open to Solana and backend engineering roles. If you're building serious on-chain infrastructure, let's talk.
        </p>
        
        <div className="flex justify-center items-center gap-6 mb-16">
          {links.filter(l => !l.isButton && l.url).map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url ?? undefined}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent border border-border group-hover:border-primary/50 group-hover:bg-accent/80 transition-all">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium">{link.name}</span>
              </a>
            );
          })}
        </div>
        
        <div className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground pb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Ready to ship
        </div>
      </div>
    </section>
  );
}