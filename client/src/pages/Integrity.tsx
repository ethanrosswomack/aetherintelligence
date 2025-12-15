import { Card } from "@/components/ui/card";
import { PageLayout } from "@/components/layout/PageLayout";

const integrityDomains = [
  {
    title: "Data Integrity",
    description: "Information is preserved accurately. Sources are traceable, transformations are logged, and corruption is detectable.",
    commitments: [
      "No silent data modification",
      "Complete audit trails",
      "Provenance tracking for all inputs",
    ],
  },
  {
    title: "Reasoning Integrity",
    description: "Conclusions follow from evidence. Logic is transparent, assumptions are stated, and uncertainty is acknowledged.",
    commitments: [
      "Explicit reasoning chains",
      "Stated confidence levels",
      "Acknowledged limitations",
    ],
  },
  {
    title: "Communication Integrity",
    description: "What we say matches what we know. We do not overstate capability, understate risk, or obscure uncertainty.",
    commitments: [
      "Accurate representation",
      "No misleading implications",
      "Clear language",
    ],
  },
  {
    title: "Operational Integrity",
    description: "Systems behave as designed. Constraints are enforced, boundaries are maintained, and deviations are flagged.",
    commitments: [
      "Consistent behavior",
      "Enforced limits",
      "Anomaly detection",
    ],
  },
];

export default function Integrity() {
  return (
    <PageLayout>
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
            data-testid="text-page-title"
          >
            Integrity
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-16">
            Integrity is the coherence between what a system claims to be and 
            what it actually does. It is not a feature to be added but a 
            property to be preserved.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                What Integrity Means
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Integrity is often invoked but rarely defined. For Aether 
                  Intelligence, integrity has specific meaning: the alignment 
                  between stated purpose, operational behavior, and actual outcomes.
                </p>
                <p>
                  A system has integrity when it does what it says it does, when 
                  its internal operations match its external claims, and when its 
                  behavior is consistent across contexts.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Integrity Domains
              </h2>
              <div className="grid gap-6">
                {integrityDomains.map((domain, index) => (
                  <Card 
                    key={domain.title}
                    className="p-6 bg-card border-card-border"
                    data-testid={`card-integrity-domain-${index}`}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {domain.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {domain.description}
                    </p>
                    <div className="space-y-2">
                      {domain.commitments.map((commitment) => (
                        <div key={commitment} className="flex items-start gap-2">
                          <span className="text-foreground mt-1">·</span>
                          <span className="text-sm text-muted-foreground">{commitment}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Integrity as Practice
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Integrity is not achieved once and preserved forever. It requires 
                ongoing attention, continuous verification, and willingness to 
                acknowledge when it has been compromised.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Sentinel Framework includes mechanisms for monitoring integrity 
                across all dimensions—detecting drift, flagging inconsistencies, and 
                triggering review when integrity is at risk.
              </p>
            </section>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
