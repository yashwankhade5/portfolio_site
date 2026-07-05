import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import { SiGithub, SiYoutube } from "react-icons/si";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

export function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-border/40 bg-muted/20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Projects</h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            Real on-chain infrastructure and full-stack systems. Focused on architecture, security, and solving hard technical problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.projects.map((project, index) => {
            const isOpen = expanded === index;
            return (
              <div
                key={index}
                className="flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-all hover:border-primary/50 overflow-hidden"
              >
                <div className="p-6 flex flex-col gap-4">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-xl tracking-tight text-foreground">{project.title}</h3>
                    <div className="flex gap-2 shrink-0 ml-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label={`${project.title} GitHub`}>
                          <SiGithub className="h-5 w-5" />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label={`${project.title} Live`}>
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                      {'demo' in project && project.demo && (
                        <a href={project.demo as string} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-red-500 transition-colors" aria-label={`${project.title} Demo Video`}>
                          <SiYoutube className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Short description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Note badge */}
                  {project.note && (
                    <div className="inline-block self-start px-3 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20">
                      {project.note}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md border border-border bg-transparent px-2.5 py-0.5 text-xs font-mono font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expand toggle */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : index)}
                    className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors self-start mt-1"
                  >
                    {isOpen ? (
                      <><ChevronUp className="h-3.5 w-3.5" /> Hide details</>
                    ) : (
                      <><ChevronDown className="h-3.5 w-3.5" /> View architecture</>
                    )}
                  </button>

                  {/* Expanded details */}
                  {isOpen && (
                    <div className="pt-4 border-t border-border/50 flex flex-col gap-4">
                      <div>
                        <span className="text-sm font-medium text-foreground block mb-1">The Problem</span>
                        <p className="text-sm text-muted-foreground">{project.problem}</p>
                      </div>

                      {'solution' in project && project.solution && (
                        <div>
                          <span className="text-sm font-medium text-foreground block mb-1">The Solution</span>
                          <p className="text-sm text-muted-foreground">{project.solution as string}</p>
                        </div>
                      )}

                      <div>
                        <span className="text-sm font-medium text-foreground block mb-1">Architecture</span>
                        <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{project.architecture}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
