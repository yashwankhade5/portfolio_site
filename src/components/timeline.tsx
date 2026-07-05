import { portfolio } from "@/data/portfolio";

export function Timeline() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-border/40 bg-muted/20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Experience & Training</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {portfolio.timeline.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Timeline marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-primary/20 relative z-10">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              
              {/* Content box */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-xl border border-border bg-card shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                  <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}