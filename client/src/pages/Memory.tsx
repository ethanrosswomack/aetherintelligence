import { Card } from "@/components/ui/card";
import { PageLayout } from "@/components/layout/PageLayout";

const memoryLayers = [
  {
    layer: "Working Memory",
    description: "Active context for current operations. What is immediately relevant to the task at hand.",
    characteristics: ["High accessibility", "Limited scope", "Rapidly updated"],
  },
  {
    layer: "Session Memory",
    description: "Continuity within a single engagement. Maintains thread of reasoning across exchanges.",
    characteristics: ["Contextual coherence", "Session-bounded", "Full retrieval"],
  },
  {
    layer: "Episodic Memory",
    description: "Specific events and interactions over time. What happened, when, and in what context.",
    characteristics: ["Temporal indexing", "Event-based recall", "Cross-reference capable"],
  },
  {
    layer: "Semantic Memory",
    description: "Accumulated knowledge and understanding. Facts, relationships, and structured knowledge.",
    characteristics: ["Conceptual organization", "Pattern integration", "Durable storage"],
  },
];

export default function Memory() {
  return (
    <PageLayout>
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
            data-testid="text-page-title"
          >
            Memory Architecture
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-16">
            Intelligence without memory is reactive at best. Memory architecture 
            enables continuity, context, and cumulative understanding—the foundation 
            for genuine reasoning.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Why Memory Matters
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Most computational systems operate without memory—each interaction 
                  begins from zero. This is efficient but limiting. Complex problems 
                  require context that persists across time.
                </p>
                <p>
                  Memory enables learning from experience, maintaining relationships 
                  across sessions, and building understanding incrementally. It is 
                  what transforms isolated computations into genuine intelligence.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Memory Layers
              </h2>
              <div className="grid gap-6">
                {memoryLayers.map((layer, index) => (
                  <Card 
                    key={layer.layer}
                    className="p-6 bg-card border-card-border"
                    data-testid={`card-memory-layer-${index}`}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {layer.layer}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {layer.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {layer.characteristics.map((char) => (
                        <span 
                          key={char}
                          className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Design Principles
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Selective Persistence
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Not all information should be retained. Memory systems must 
                    distinguish signal from noise, preserving what matters while 
                    allowing irrelevant details to fade.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Contextual Retrieval
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Information must be retrievable when relevant. This requires 
                    not just storage but intelligent indexing and association.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Integrity Verification
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Memory can degrade or become corrupted. Systems must verify 
                    integrity and distinguish between reliable recall and 
                    confabulation.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
