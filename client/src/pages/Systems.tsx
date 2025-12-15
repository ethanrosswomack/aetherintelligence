import { Card } from "@/components/ui/card";
import { PageLayout } from "@/components/layout/PageLayout";

export default function Systems() {
  return (
    <PageLayout>
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
            data-testid="text-page-title"
          >
            Systems
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-16">
            The relationship between Aether Intelligence, EverLightOS, and the 
            Sentinel Framework is intentional. This page clarifies that relationship 
            without exposing implementation details.
          </p>

          <div className="space-y-16">
            <section>
              <Card className="p-8 bg-card border-card-border" data-testid="card-everlightos">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <h2 className="text-2xl font-semibold text-foreground">
                    EverLightOS
                  </h2>
                </div>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    EverLightOS is the intelligence operating system that underlies 
                    Aether Intelligence. It is not a product available for deployment—it 
                    is the infrastructure that makes our capabilities possible.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-3">What it does:</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">·</span>
                        <span>Maintains persistent memory across sessions and contexts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">·</span>
                        <span>Orchestrates complex, multi-stage reasoning processes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">·</span>
                        <span>Recognizes patterns and maintains continuity over time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">·</span>
                        <span>Provides the substrate for all intelligence operations</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-3">What it is not:</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">·</span>
                        <span>Not a consumer application or SaaS product</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">·</span>
                        <span>Not available for licensing or self-hosting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">·</span>
                        <span>Not a replacement for existing enterprise systems</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            <section>
              <Card className="p-8 bg-card border-card-border" data-testid="card-sentinel">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <h2 className="text-2xl font-semibold text-foreground">
                    The Sentinel Framework
                  </h2>
                </div>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    The Sentinel Framework is the governance layer that ensures all 
                    intelligence operations remain aligned, ethical, and bounded. It 
                    exists because capability without constraint is dangerous.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-3">Why it exists:</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">·</span>
                        <span>Intelligence systems require explicit boundaries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">·</span>
                        <span>Alignment must be structural, not aspirational</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">·</span>
                        <span>Trust requires transparency about constraints</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">·</span>
                        <span>Oversight is a feature, not a limitation</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-3">What it governs:</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">·</span>
                        <span>Decision boundaries and escalation requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">·</span>
                        <span>Data handling and information integrity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">·</span>
                        <span>Human-in-the-loop requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">·</span>
                        <span>Operational constraints and safety margins</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            <section className="pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                The Relationship
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Aether Intelligence is the public-facing layer—what you interact with. 
                EverLightOS provides the infrastructure that makes intelligence possible. 
                The Sentinel Framework ensures that intelligence remains responsible.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These are not three separate products. They are three aspects of a 
                single coherent system, designed to work together. The intelligence 
                layer cannot function without the operating system. The operating 
                system would be dangerous without governance. And governance without 
                capability would be merely theoretical.
              </p>
            </section>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
