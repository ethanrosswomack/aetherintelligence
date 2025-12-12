import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/capabilities", label: "Capabilities" },
  { path: "/systems", label: "Systems" },
  { path: "/research", label: "Research" },
  { path: "/memory", label: "Memory" },
  { path: "/governance", label: "Governance" },
  { path: "/integrity", label: "Integrity" },
  { path: "/patterns", label: "Patterns" },
  { path: "/philosophy", label: "Philosophy" },
  { path: "/documentation", label: "Documentation" },
  { path: "/contact", label: "Contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        data-testid="navigation-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <Link href="/" data-testid="link-home-logo">
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Aether Intelligence
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1 flex-wrap justify-end">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    data-testid={`link-nav-${item.label.toLowerCase()}`}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      location === item.path
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm lg:hidden"
          data-testid="mobile-menu-overlay"
        >
          <nav className="flex flex-col items-center justify-center h-full gap-4 pt-16">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  className={`px-6 py-3 text-lg font-medium rounded-md transition-colors ${
                    location === item.path
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
