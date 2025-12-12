import { 
  Search, 
  Database, 
  GitBranch, 
  Settings, 
  Users,
  Lightbulb
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageLayout } from "@/components/layout/PageLayout";

const capabilities = [
  {
    icon: Search,
    title: "Intelligence Synthesis & Research",
    description: "Comprehensive analysis across domains, connecting disparate information sources into coherent understanding. Structured reasoning applied to open-ended questions.",
    infrastructure: "EverLightOS provides persistent memory and pattern recognition across research sessions.",
    governance: "Sentinel Framework ensures source integrity and prevents confirmation bias.",
  },
  {
    icon: Database,
    title: "Knowledge and Memory Systems",
    description: "Durable knowledge infrastructure that maintains context across time. Information organized for retrieval, synthesis, and application.",
    infrastructure: "Built on EverLightOS memory architecture for continuity and recall.",
    governance: "Data handling bounded by Sentinel Framework integrity protocols.",
  },
  {
    icon: GitBranch,
    title: "Decision-Support Architectures",
    description: "Frameworks for navigating complex decisions. Not replacement for judgment, but enhancement of it—surfacing options, mapping consequences, clarifying tradeoffs.",
    infrastructure: "Orchestration layer from EverLightOS manages multi-stage analysis.",
    governance: "Human-in-the-loop requirements enforced by Sentinel Framework.",
  },
  {
    icon: Settings,
    title: "Automation with Oversight",
    description: "Systematic processes that operate reliably while maintaining human control. Automation where it adds value, human judgment where it matters.",
    infrastructure: "EverLightOS handles scheduling, monitoring, and exception handling.",
    governance: "Sentinel Framework defines boundaries and escalation paths.",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop Intelligence",
    description: "Collaborative intelligence that augments human capability rather than replacing it. The system advises; humans decide.",
    infrastructure: "Interaction patterns managed by EverLightOS.",
    governance: "Authority boundaries clearly defined by Sentinel Framework.",
  },
  {
    icon: Lightbulb,
    title: "Structured Problem Analysis",
    description: "Breaking complex problems into tractable components. Identifying leverage points, dependencies, and intervention opportunities.",
    infrastructure: "Pattern libraries maintained in EverLightOS.",
    governance: "Analytical rigor ensured by Sentinel Framework standards.",
  },
];

export default function Capabilities() {
  return (
    <PageLayout>
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h1 
              className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
              data-testid="text-page-title"
            >
              Capabilities
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              What is possible with Aether Intelligence. Each capability is grounded 
              in the infrastructure of EverLightOS and bounded by the governance of 
              the Sentinel Framework.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card 
                key={capability.title}
                className="p-8 bg-card border-card-border"
                data-testid={`card-capability-${index}`}
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6">
                  <capability.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {capability.description}
                </p>
                <div className="space-y-3 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Infrastructure:</span>{" "}
                    {capability.infrastructure}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Governance:</span>{" "}
                    {capability.governance}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
