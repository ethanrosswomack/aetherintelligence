import { PageLayout } from "@/components/layout/PageLayout";

export default function About() {
  return (
    <PageLayout>
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 
            className="text-4xl sm:text-5xl font-bold text-foreground mb-8"
            data-testid="text-page-title"
          >
            About Aether Intelligence
          </h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Aether Intelligence exists to apply structured reasoning to complex systems. 
              It is not a product in the conventional sense—it is a capability, a way of 
              engaging with problems that resist simple solutions.
            </p>

            <div className="space-y-12 mt-12">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Why We Exist
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The world is full of systems that have grown beyond the comprehension of 
                  any single mind. Financial networks, technological infrastructure, 
                  organizational dynamics—these require not just analysis, but synthesis. 
                  Not just speed, but depth. Not just intelligence, but integrity.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Aether Intelligence was conceived to address this need: to bring 
                  structured reasoning to bear on problems that demand more than 
                  conventional approaches can offer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Long-Horizon Thinking
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We operate on timescales that extend beyond quarterly cycles. Our 
                  approach prioritizes durability over novelty, clarity over complexity, 
                  and restraint over acceleration. This is not about moving fast—it is 
                  about moving deliberately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Commitment to Clarity
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reject obscurantism. If something cannot be explained simply, 
                  it is not yet understood. Our work aims for signal integrity—reducing 
                  noise, preserving meaning, and communicating with precision.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  The Architecture
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Aether Intelligence is built on EverLightOS, an intelligence operating 
                  system that handles memory, pattern recognition, and orchestration. 
                  It is governed by the Sentinel Framework, which ensures that all 
                  operations remain aligned, ethical, and bounded.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This architecture is not decorative—it is structural. The relationship 
                  between intelligence, infrastructure, and governance is intentional, 
                  and it shapes every capability we offer.
                </p>
              </section>

              <div className="pt-8 border-t border-border">
                <blockquote className="text-xl text-foreground italic leading-relaxed">
                  "Intelligence without governance is merely computation. 
                  It is the integration of capability with constraint that 
                  produces wisdom."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
