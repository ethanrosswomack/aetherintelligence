import { Link } from "wouter";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

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

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const mutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter", { email });
      return response.json();
    },
    onSuccess: () => {
      setSubscribed(true);
      setEmail("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      mutation.mutate(email);
    }
  };

  if (subscribed) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <CheckCircle className="w-4 h-4 text-primary" />
        <span data-testid="text-newsletter-success">Subscribed to updates</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-9 bg-background/50"
            data-testid="input-newsletter-email"
            required
          />
        </div>
        <Button
          type="submit"
          size="default"
          disabled={mutation.isPending}
          data-testid="button-newsletter-submit"
        >
          {mutation.isPending ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            "Subscribe"
          )}
        </Button>
      </div>
      {mutation.isError && (
        <p className="text-sm text-destructive" data-testid="text-newsletter-error">
          Failed to subscribe. Please try again.
        </p>
      )}
    </form>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="max-w-md">
            <h3 className="text-sm font-semibold text-foreground mb-2">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Receive occasional updates on research progress and system developments.
            </p>
            <NewsletterForm />
          </div>
        </div>

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
