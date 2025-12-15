import { Card } from "@/components/ui/card";
import { PageLayout } from "@/components/layout/PageLayout";
import { Shield, Scale, Eye, Lock } from "lucide-react";

const governancePrinciples = [
  {
    icon: Shield,
    title: "Bounded Operations",
    description: "Every operation has defined limits. There are things the system will not do, regardless of instruction. These boundaries are structural, not optional.",
  },
  {
    icon: Scale,
    title: "Proportional Response",
    description: "Action is calibrated to context. Greater consequence requires greater scrutiny. High-stakes decisions demand human involvement.",
  },
  {
    icon: Eye,
    title: "Transparent Constraints",
    description: "Limitations are stated, not hidden. When the system cannot or will not do something, it says so clearly and explains why.",
  },
  {
    icon: Lock,
    title: "Immutable Safeguards",
    description: "Core safety constraints cannot be overridden. They are not preferences to be negotiated but principles to be preserved.",
  },
];

export default function Governance() {
  return (
    <PageLayout>
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
            data-testid="text-page-title"
          >
            Governance
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-16">
            The Sentinel Framework provides governance for all Aether Intelligence 
            operations. Capability without constraint is dangerous. Governance 
            is how we ensure intelligence remains beneficial.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Core Principles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {governancePrinciples.map((principle, index) => (
                  <Card 
                    key={principle.title}
                    className="p-6 bg-card border-card-border"
                    data-testid={`card-governance-principle-${index}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
                      <principle.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {principle.description}
                    </p>
                  </Card>
                ))}
              </div>
            </section>

            <section className="pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Oversight Layers
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Operational Layer
                  </h3>
                  <p>
                    Real-time monitoring of system behavior. Anomaly detection, 
                    constraint verification, and intervention triggers operate 
                    continuously during all operations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Policy Layer
                  </h3>
                  <p>
                    Defined rules that govern behavior. What is permissible, what 
                    requires escalation, what is prohibited—all codified and 
                    consistently enforced.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Ethical Layer
                  </h3>
                  <p>
                    Foundational principles that inform policy. When rules are 
                    insufficient, ethical principles provide guidance. These are 
                    not implemented as code but as constraints on code.
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Human Authority
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Sentinel Framework recognizes that human judgment cannot be 
                replaced by automated systems. Certain decisions must be made by 
                humans, and the framework ensures these decisions remain in human 
                hands.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This is not a weakness—it is a design principle. Intelligence 
                systems should augment human capability, not supplant human 
                authority. The Sentinel Framework enforces this boundary.
              </p>
            </section>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
