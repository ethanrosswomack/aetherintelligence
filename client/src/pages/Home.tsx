import { Link } from "wouter";
import { motion } from "framer-motion";
import { Brain, Shield, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageLayout } from "@/components/layout/PageLayout";

const systemLayers = [
  {
    icon: Brain,
    title: "Aether Intelligence",
    description: "The applied intelligence, research, and synthesis layer. What outsiders interact with.",
    accent: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: Cpu,
    title: "EverLightOS",
    description: "The underlying intelligence operating system. Memory, pattern recognition, orchestration, continuity.",
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Shield,
    title: "Sentinel Framework",
    description: "Oversight, integrity, constraints, safety, governance. Ensures intelligence remains aligned and bounded.",
    accent: "from-emerald-500/20 to-teal-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <PageLayout>
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-background to-background" />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight"
            data-testid="text-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Intelligence for
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Complex Systems
            </span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            data-testid="text-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            Aether Intelligence applies structured reasoning to complex systems. 
            Research, synthesis, and decision support—built on a foundation of 
            memory and governed by principled constraints.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <Link href="/contact">
              <Button size="lg" data-testid="button-hero-contact">
                Begin Inquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/capabilities">
              <Button variant="outline" size="lg" data-testid="button-hero-capabilities">
                Explore Capabilities
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <motion.section 
        className="py-24 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              data-testid="text-section-how-it-works"
            >
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three layers working in concert. Intelligence applied with intention, 
              built on lasting infrastructure, governed by clear constraints.
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {systemLayers.map((layer, index) => (
              <motion.div key={layer.title} variants={cardVariants}>
                <Card 
                  className="relative p-8 bg-card border-card-border overflow-visible"
                  data-testid={`card-system-layer-${index}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${layer.accent} rounded-lg opacity-50`} />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6">
                      <layer.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {layer.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
            data-testid="text-section-cta"
          >
            Structured Thinking for Complex Problems
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Aether Intelligence is designed for those who work with complexity—systems that 
            require careful reasoning, long-term memory, and principled oversight. 
            Not a product to deploy, but a capability to engage.
          </p>
          <Link href="/about">
            <Button variant="outline" size="lg" data-testid="button-learn-more">
              Learn More About Our Approach
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </motion.section>
    </PageLayout>
  );
}
