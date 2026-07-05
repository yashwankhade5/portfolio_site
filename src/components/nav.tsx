import { portfolio } from "@/data/portfolio";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <a href="#" className="font-mono text-sm font-semibold tracking-tight transition-colors hover:text-primary">
            {portfolio.personal.name.split(" ")[0].toLowerCase()}_
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline decoration-primary/50 underline-offset-4"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Nav (simplified) */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}