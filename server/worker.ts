import { insertContactMessageSchema, insertNewsletterSubscriptionSchema } from "@shared/schema";
import { z } from "zod";

// Placeholder for storage logic - will need to be adapted for Workers KV or D1
const storage = {
  async createContactMessage(data: z.infer<typeof insertContactMessageSchema>) {
    console.log("Storing contact message:", data);
    // In a real Worker, you'd interact with a database like D1 or KV here
    return { id: "mock-contact-id" };
  },
  async getNewsletterSubscriptionByEmail(email: string) {
    console.log("Checking newsletter subscription for:", email);
    // In a real Worker, you'd interact with a database like D1 or KV here
    if (email === "test@example.com") { // Mock existing subscription
      return { id: "mock-sub-id", email };
    }
    return null;
  },
  async createNewsletterSubscription(data: z.infer<typeof insertNewsletterSubscriptionSchema>) {
    console.log("Storing newsletter subscription:", data);
    // In a real Worker, you'd interact with a database like D1 or KV here
    return { id: "mock-sub-id" };
  },
};

const handleApiRequest = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);

  if (url.pathname === "/api/contact" && request.method === "POST") {
    try {
      const body = await request.json();
      const validatedData = insertContactMessageSchema.parse(body);
      const message = await storage.createContactMessage(validatedData);
      return new Response(JSON.stringify({ success: true, id: message.id }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(JSON.stringify({ error: "Invalid form data", details: error.errors }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ error: "Failed to submit message" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  if (url.pathname === "/api/newsletter" && request.method === "POST") {
    try {
      const body = await request.json();
      const validatedData = insertNewsletterSubscriptionSchema.parse(body);

      const existing = await storage.getNewsletterSubscriptionByEmail(validatedData.email);
      if (existing) {
        return new Response(JSON.stringify({ success: true, message: "Already subscribed" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }

      const subscription = await storage.createNewsletterSubscription(validatedData);
      return new Response(JSON.stringify({ success: true, id: subscription.id }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return new Response(JSON.stringify({ error: "Invalid email", details: error.errors }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ error: "Failed to subscribe" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  
  if (url.pathname === "/api/health") {
    return new Response("OK", { status: 200 });
  }

  return new Response("API route not found", { status: 404 });
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api")) {
      return handleApiRequest(request);
    }

    try {
      // Try to serve the static asset
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) {
        return assetResponse;
      }
    } catch (e) {
      // Ignore errors and fall back to serving index.html
    }

    // Fallback to serving index.html for SPA routing
    const spaRequest = new Request(new URL("/index.html", request.url), request);
    return env.ASSETS.fetch(spaRequest);
  },
};

// Define Env interface for Cloudflare Workers environment variables and bindings
interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
  // Add other environment variables or bindings here if needed
}
