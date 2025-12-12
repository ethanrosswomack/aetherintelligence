import { PageLayout } from "@/components/layout/PageLayout";

export default function Philosophy() {
  return (
    <PageLayout>
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 
            className="text-4xl sm:text-5xl font-bold text-foreground mb-8"
            data-testid="text-page-title"
          >
            Philosophy
          </h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              The philosophy that guides Aether Intelligence is neither accidental 
              nor decorative. It shapes every decision, every constraint, every 
              capability. This is not mission-statement language—it is operational 
              principle.
            </p>

            <div className="space-y-16">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  On Restraint
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The most important capability is often the ability to not act. 
                  Restraint is not weakness—it is wisdom. Systems that cannot 
                  restrain themselves are dangerous, regardless of their other 
                  capabilities.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Aether Intelligence is designed with restraint as a core 
                  capability. There are things we will not do, domains we will 
                  not enter, and decisions we will not make. These boundaries 
                  are features, not limitations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  On Long-Horizon Thinking
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Short-term optimization often creates long-term problems. Systems 
                  that maximize for immediate outcomes frequently undermine the 
                  conditions for sustainable success. This is not just inefficient—it 
                  is self-defeating.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We operate on extended time horizons. Our architecture is designed 
                  for durability, not just performance. Our decisions account for 
                  consequences that may take years to manifest.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  On Clarity
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Complexity is often confusion in disguise. If something cannot 
                  be explained simply, it is probably not yet understood. We commit 
                  to clarity—not simplification that loses meaning, but precision 
                  that preserves it.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This extends to our communication, our reasoning, and our 
                  constraints. We state things plainly. We explain our limitations. 
                  We acknowledge uncertainty.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  On Human Primacy
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Intelligence systems exist to serve human purposes. They should 
                  augment human capability, not replace human authority. The goal 
                  is not to make humans unnecessary but to make them more effective.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This is not mere preference—it is structural commitment. The 
                  Sentinel Framework enforces human primacy through architectural 
                  constraints, ensuring that human judgment remains central to 
                  consequential decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  On Signal Integrity
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Information degrades as it travels. Meaning is lost in translation, 
                  nuance is flattened, and signal becomes noise. Maintaining 
                  information integrity requires conscious effort and careful design.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to signal integrity—preserving meaning, maintaining 
                  fidelity, and reducing noise. This applies to our internal 
                  operations, our research, and our communication.
                </p>
              </section>

              <div className="pt-12 border-t border-border">
                <blockquote className="text-xl text-foreground italic leading-relaxed">
                  "The purpose of intelligence is not to know everything, but to 
                  understand what matters. Not to act constantly, but to act wisely. 
                  Not to optimize endlessly, but to optimize for the right things."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
