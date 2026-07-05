import { portfolio } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-border/40">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">About</h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
          </div>
          
          <div className="w-full md:w-2/3 space-y-6">
            {portfolio.about.map((paragraph, index) => (
              <p key={index} className="text-base/relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}