# AetherIntelligence.net Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from Linear's restraint, Stripe's clarity, and Notion's information architecture. Cosmic aesthetic without gimmickry—authoritative, not theatrical.

## Typography System
- **Display**: Inter or Space Grotesk (via Google Fonts CDN) - clean, technical authority
- **Body**: Same font family, varying weights for hierarchy
- **Sizes**: Large display headers (text-5xl to text-7xl), section headers (text-3xl to text-4xl), body (text-lg), captions (text-sm)
- **Weights**: Bold (700) for headers, medium (500) for subheads, regular (400) for body
- **Line height**: Generous spacing (leading-relaxed) for readability against dark backgrounds

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24, 32 consistently
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 for grids, space-y-4 for vertical stacks
- Container max-widths: max-w-7xl for full sections, max-w-4xl for text-focused content

## Page Architecture

### Home Page
- **Hero**: Full-bleed cosmic background image (80vh), centered content with large display text introducing Aether Intelligence
- **Three-Layer System**: Cards layout (3 columns on desktop, stack on mobile) - Aether Intelligence, EverLightOS, Sentinel Framework with icons and brief descriptions
- **Value Proposition**: 2-column split (60/40) - text left, supporting visual right
- **CTA Section**: Centered, focused call-to-action leading to Contact

### Content Pages (About, Philosophy, Documentation, etc.)
- **Header**: Text-focused with subtle cosmic accent (small background treatment)
- **Body**: Single column, max-w-3xl for optimal reading
- **Section breaks**: Horizontal dividers with subtle cosmic gradients
- **Pull quotes**: Indented blocks with larger text for key concepts

### Technical Pages (Systems, Capabilities, Memory Architecture, etc.)
- **Structure**: Alternating content blocks - text section followed by conceptual diagram area
- **Feature grids**: 2-3 columns showcasing capabilities with icon + title + description pattern
- **Hierarchy**: Clear H1 → H2 → H3 progression with consistent spacing

### Governance/Integrity Pages
- **Framework visualization**: Vertical timeline or process flow showing oversight layers
- **Principle cards**: Grid of 2-3 columns with concise, authoritative statements

## Component Library

### Navigation
- Fixed header with transparent-to-solid transition on scroll
- Clean horizontal menu (desktop), hamburger with full-screen overlay (mobile)
- Subtle underline indicators for active page

### Cards
- Minimal borders or subtle backgrounds
- Generous internal padding (p-8)
- Hover state: subtle elevation, no dramatic effects

### Buttons
- Primary CTA: Solid background with blur backdrop when over images
- Secondary: Outlined/ghost treatment
- Sizing: px-8 py-3 for primary actions
- No custom hover states (use default tailwind transitions)

### Forms (Contact Page)
- Single column layout, max-w-xl centered
- Input fields with subtle borders, focus states with cosmic accent glow
- Large submit button, full width on mobile
- Form context: Add office hours, response time expectations adjacent to form

### Content Sections
- **Stats/Metrics**: 3-4 column grid for numerical highlights
- **Text + Visual**: 60/40 or 50/50 splits with breathing room
- **List Items**: Vertical stack with icons, clear hierarchy

## Images Strategy
**Hero Images**: Yes - use cosmic/space imagery for:
- Home page hero (Andromedan Galaxy-inspired, deep field space photography)
- Section backgrounds (subtle, low-opacity overlays)
- Systems page header (abstract technological visualization)

**Supporting Imagery**:
- Abstract visualizations for technical concepts (network graphs, data patterns)
- Minimal, purposeful placement - only where they clarify complex ideas
- Never decorative filler - each image serves comprehension

**Image Treatment**: 
- Dark overlays to ensure text readability
- Blur effects for backgrounds under text
- Subtle gradients from transparent to dark at edges

## Vertical Rhythm
- Consistent py-20 to py-32 for major sections
- py-12 to py-16 for subsections
- Natural content height - never force 100vh except hero
- Breathing room between elements without emptiness

## Multi-Column Strategy
**Use columns for**:
- Capability showcases (3-column grid)
- System layer explanations (3-column on Home)
- Documentation sections (2-column for code/explanation patterns)
- Feature comparisons

**Single column for**:
- Long-form philosophy text
- About page narrative
- Contact form
- Documentation prose

## Rules

### Deployment Context
The deploy error is happening because the build system is running inside `dist/`, and `dist/` is not a Node project (no package.json there). The repo’s actual Node project root is the top level (it has package.json, vite.config.ts, etc.), and `dist/` is supposed to be an output folder.

**Fix the deploy settings (the actual root cause)**
Wherever you’re deploying (Cloudflare Pages / Workers build UI / etc.), change:
- **Root directory**: `.` (repo root) NOT `dist`
- **Build command**: `npm ci && npm run build` (or `npm ci && node script/build.ts`)
- **Build output directory**: `dist` (or whatever the build creates)

### Prompt 1 — Establish the correct build + output
Inspect the repository structure. Identify how the frontend (Vite) and backend (server/) are built and started. Determine what the dist/ folder is supposed to contain. Confirm which npm scripts exist in package.json and what they do. Then propose the correct CI/Pages build command and output directory.

### Prompt 2 — Fix the “root directory = dist” mistake everywhere
Search the repo for any CI/deploy configs (wrangler.toml, cloudflare pages config, package.json scripts, README instructions) that assume the root directory is dist. Update configs so builds run from repo root and only output to dist. Provide exact diffs/patches.

### Prompt 3 — Make a single “build” command that always works
Create or correct a root npm run build script that builds the client and server (if applicable) and writes deployable artifacts to dist/. Use script/build.ts if it’s intended for this. Ensure the command works on Linux in CI (no absolute paths, no assumptions about local env).

### Prompt 4 — Sanity check: what should be deployed (static vs server)
Determine whether this app is intended to deploy as:
- static site only (Vite build), or
- Node server (Express/etc), or
- Cloudflare Worker/Pages Functions.
Based on the repo files under server/ (index.ts, static.ts, vite.ts), recommend the correct deployment target and required config (Pages vs Workers). Provide the minimum viable deployment plan.

### Prompt 5 — If deploying to Cloudflare Pages (static)
Configure the project for Cloudflare Pages static deployment: build command, output directory, and any SPA routing (e.g., _redirects or routes.json). Ensure refresh on nested routes works. Add needed files under public/ if missing.

### Prompt 6 — If deploying to a Node host instead (Render/Fly/VPS)
Configure production start for a Node host: add npm run start that runs the built server, ensure static assets are served from the correct directory, and document required environment variables. Provide Dockerfile if helpful.

### Prompt 7 — Tighten TypeScript/build correctness
Run through TypeScript configs and Vite config to ensure build succeeds in CI. Fix any path alias issues, missing imports, or environment variable typing issues. Output a list of changes with file paths and reasoning.

## Critical Constraints
- **No animations** except subtle fades and scroll-triggered reveals
- **No buzzwords** in any copy
- **Calm confidence** - let content speak, minimal flourishes
- **Information density** - every section purposeful, no filler
- **Icons**: Heroicons via CDN for consistent, minimal iconography

## Footer
Comprehensive footer with:
- Quick navigation to all 13 pages (organized by category)
- Contact email reference
- Brief system acknowledgment ("Powered by EverLightOS • Governed by Sentinel Framework")
- No newsletter signup (not appropriate for this project's tone)
