import { portfolio } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-border/40">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Technical Skills</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {portfolio.skills.map((group, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <span 
                    key={skill}
                    className="inline-flex items-center rounded bg-accent px-2.5 py-1 text-sm font-medium text-accent-foreground border border-border/50 transition-colors hover:border-primary/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}