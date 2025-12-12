import { Card } from "@/components/ui/card";
import { PageLayout } from "@/components/layout/PageLayout";
import { FileText, BookOpen, Code, Shield } from "lucide-react";

const documentSections = [
  {
    icon: FileText,
    title: "System Overview",
    description: "High-level architecture and component relationships. How Aether Intelligence, EverLightOS, and the Sentinel Framework work together.",
    topics: ["Architecture principles", "Component interactions", "System boundaries"],
  },
  {
    icon: BookOpen,
    title: "Conceptual Foundations",
    description: "The theoretical basis for our approach. Memory architecture, pattern recognition, and governance frameworks explained.",
    topics: ["Memory models", "Pattern taxonomy", "Governance theory"],
  },
  {
    icon: Code,
    title: "Operational Specifications",
    description: "How the system behaves in practice. Constraints, capabilities, and operational boundaries documented.",
    topics: ["Capability limits", "Operational constraints", "Interaction patterns"],
  },
  {
    icon: Shield,
    title: "Governance Documentation",
    description: "The Sentinel Framework in detail. Oversight mechanisms, constraint enforcement, and safety architecture.",
    topics: ["Oversight layers", "Constraint types", "Escalation procedures"],
  },
];

export default function Documentation() {
  return (
    <PageLayout>
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
            data-testid="text-page-title"
          >
            Documentation
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-16">
            Technical documentation for understanding the Aether Intelligence 
            system. This is not comprehensive internal documentation—it is 
            what can be shared publicly without compromising system integrity.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Documentation Sections
              </h2>
              <div className="grid gap-6">
                {documentSections.map((section, index) => (
                  <Card 
                    key={section.title}
                    className="p-6 bg-card border-card-border"
                    data-testid={`card-doc-section-${index}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <section.icon className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {section.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {section.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {section.topics.map((topic) => (
                            <span 
                              key={topic}
                              className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Terminology
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Aether Intelligence
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The public-facing intelligence layer. The interface through 
                    which external parties engage with our capabilities.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    EverLightOS
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The intelligence operating system. Provides memory, pattern 
                    recognition, orchestration, and continuity infrastructure.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Sentinel Framework
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The governance layer. Ensures oversight, integrity, 
                    constraints, safety, and ethical alignment.
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Document Status
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This documentation is provided for understanding and reference. 
                It does not constitute a complete technical specification and 
                should not be used for implementation purposes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                All documentation is subject to revision as the system evolves. 
                Core principles remain stable; operational details may change.
              </p>
            </section>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
