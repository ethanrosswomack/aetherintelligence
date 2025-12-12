import { Link } from "wouter";

const footerLinks = {
  core: [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/capabilities", label: "Capabilities" },
    { path: "/systems", label: "Systems" },
  ],
  intelligence: [
    { path: "/research", label: "Research" },
    { path: "/memory", label: "Memory Architecture" },
    { path: "/patterns", label: "Patterns" },
  ],
  governance: [
    { path: "/governance", label: "Governance" },
    { path: "/integrity", label: "Integrity" },
    { path: "/philosophy", label: "Philosophy" },
  ],
  resources: [
    { path: "/documentation", label: "Documentation" },
    { path: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Core</h3>
            <ul className="space-y-3">
              {footerLinks.core.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Intelligence</h3>
            <ul className="space-y-3">
              {footerLinks.intelligence.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Governance</h3>
            <ul className="space-y-3">
              {footerLinks.governance.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-lg font-semibold text-foreground">
                Aether Intelligence
              </span>
              <span className="text-xs text-muted-foreground">
                Powered by EverLightOS · Governed by Sentinel Framework
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              contact@aetherintelligence.net
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
