import { Card } from "@/components/ui/card";
import { PageLayout } from "@/components/layout/PageLayout";

const researchAreas = [
  {
    title: "Systems Analysis",
    description: "Understanding complex systems through careful decomposition and reconstruction. Identifying leverage points, feedback loops, and emergent behaviors.",
  },
  {
    title: "Information Synthesis",
    description: "Connecting disparate sources of information into coherent understanding. Moving from data to insight to actionable knowledge.",
  },
  {
    title: "Pattern Recognition",
    description: "Identifying recurring structures across domains. Recognizing when a problem has been solved before, even when it appears in new form.",
  },
  {
    title: "Uncertainty Mapping",
    description: "Distinguishing what is known from what is assumed. Characterizing confidence levels and identifying critical unknowns.",
  },
];

export default function Research() {
  return (
    <PageLayout>
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
            data-testid="text-page-title"
          >
            Research
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-16">
            Structured reasoning applied to open-ended questions. Research at 
            Aether Intelligence is not about accumulating information—it is 
            about building understanding.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Our Approach
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Research is the foundation of everything we do. Before offering 
                  analysis, before suggesting decisions, we must first understand. 
                  This requires patience, rigor, and intellectual honesty.
                </p>
                <p>
                  Our research methodology prioritizes depth over breadth, accuracy 
                  over speed, and synthesis over summarization. We seek not just to 
                  answer questions, but to understand why those questions matter 
                  and what new questions they raise.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Research Areas
              </h2>
              <div className="grid gap-6">
                {researchAreas.map((area, index) => (
                  <Card 
                    key={area.title}
                    className="p-6 bg-card border-card-border"
                    data-testid={`card-research-area-${index}`}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </Card>
                ))}
              </div>
            </section>

            <section className="pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Research Principles
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Source Integrity
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every claim can be traced to its source. Provenance is maintained, 
                    and the chain of reasoning is transparent.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Acknowledged Uncertainty
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We state what we do not know as clearly as what we do know. 
                    Confidence levels are explicit, and assumptions are surfaced.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Iterative Refinement
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Understanding deepens over time. Initial conclusions are 
                    provisional, and new information is integrated continuously.
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
