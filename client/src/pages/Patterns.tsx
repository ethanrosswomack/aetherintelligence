import { Card } from "@/components/ui/card";
import { PageLayout } from "@/components/layout/PageLayout";

const patternTypes = [
  {
    name: "Structural Patterns",
    description: "How systems are organized. The relationships between components, the flows of information, the architecture of complexity.",
    examples: ["Hierarchy and network structures", "Feedback loop identification", "Bottleneck and leverage point mapping"],
  },
  {
    name: "Temporal Patterns",
    description: "How systems evolve over time. Cycles, trends, phase transitions, and developmental stages.",
    examples: ["Growth and decay curves", "Cyclical behaviors", "Tipping points and transitions"],
  },
  {
    name: "Behavioral Patterns",
    description: "How systems respond to inputs. Reactions, adaptations, and characteristic responses to stimuli.",
    examples: ["Response dynamics", "Adaptation mechanisms", "Emergent behaviors"],
  },
  {
    name: "Failure Patterns",
    description: "How systems break down. Common modes of failure, cascade dynamics, and vulnerability structures.",
    examples: ["Cascade failure sequences", "Single points of failure", "Resilience gaps"],
  },
];

export default function Patterns() {
  return (
    <PageLayout>
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
            data-testid="text-page-title"
          >
            Patterns
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-16">
            Pattern recognition is the ability to see structure across instances. 
            It is how we recognize that a new problem shares form with problems 
            already solved, even when the surface details differ.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                The Value of Pattern Recognition
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Complex systems often appear unique on the surface but share 
                  deep structural similarities. A supply chain problem may have 
                  the same underlying dynamics as an ecological system. A organizational 
                  challenge may mirror patterns seen in distributed computing.
                </p>
                <p>
                  Pattern recognition allows us to transfer understanding across 
                  domains—to apply solutions from one context to problems in another. 
                  This is not analogy but structural mapping.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Pattern Categories
              </h2>
              <div className="grid gap-6">
                {patternTypes.map((pattern, index) => (
                  <Card 
                    key={pattern.name}
                    className="p-6 bg-card border-card-border"
                    data-testid={`card-pattern-type-${index}`}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {pattern.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {pattern.description}
                    </p>
                    <div className="space-y-1">
                      {pattern.examples.map((example) => (
                        <div key={example} className="flex items-start gap-2">
                          <span className="text-foreground mt-1">·</span>
                          <span className="text-sm text-muted-foreground">{example}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Pattern Libraries
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                EverLightOS maintains libraries of recognized patterns—cataloged, 
                characterized, and cross-referenced. When analyzing a new situation, 
                these libraries enable rapid identification of relevant precedents.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pattern libraries are not static. They are continuously updated as 
                new patterns are identified, existing patterns are refined, and 
                connections between patterns are discovered.
              </p>
            </section>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
