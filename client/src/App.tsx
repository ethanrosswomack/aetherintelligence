import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Capabilities from "@/pages/Capabilities";
import Systems from "@/pages/Systems";
import Research from "@/pages/Research";
import Memory from "@/pages/Memory";
import Governance from "@/pages/Governance";
import Integrity from "@/pages/Integrity";
import Patterns from "@/pages/Patterns";
import Philosophy from "@/pages/Philosophy";
import Documentation from "@/pages/Documentation";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/capabilities" component={Capabilities} />
      <Route path="/systems" component={Systems} />
      <Route path="/research" component={Research} />
      <Route path="/memory" component={Memory} />
      <Route path="/governance" component={Governance} />
      <Route path="/integrity" component={Integrity} />
      <Route path="/patterns" component={Patterns} />
      <Route path="/philosophy" component={Philosophy} />
      <Route path="/documentation" component={Documentation} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
