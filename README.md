# AetherIntelligence.net

## Overview
A 13-page public-facing intelligence platform website for Aether Intelligence. The site explains the three-layer system architecture:
- **Aether Intelligence** - The applied intelligence, research, and synthesis layer (public-facing)
- **EverLightOS** - The underlying intelligence operating system (memory, pattern recognition, orchestration)
- **Sentinel Framework** - Governance, oversight, integrity, constraints, safety

## Recent Changes
- December 12, 2025: Initial build of all 13 pages with cosmic dark theme
- Created Navigation with scroll effects and mobile menu
- Created Footer with system acknowledgment
- Implemented contact form with validation

## Local Development

To build the project locally, run the following commands:

```bash
npm install
npm run build
```

To run the development server, use:

```bash
npm run dev
```

## Project Architecture

### Frontend (client/)
- React + TypeScript with Vite
- Tailwind CSS with cosmic dark theme (deep space blacks, indigo/purple gradients)
- Space Grotesk font for technical authority
- wouter for routing

### Pages (13 total)
1. Home (/) - Hero with three-layer system cards
2. About (/about) - Philosophy and intent
3. Capabilities (/capabilities) - 6 capability cards with infrastructure/governance notes
4. Systems (/systems) - EverLightOS and Sentinel Framework explanations
5. Research (/research) - Research methodology and areas
6. Memory (/memory) - Memory architecture layers
7. Governance (/governance) - Sentinel Framework oversight principles
8. Integrity (/integrity) - Data, reasoning, communication, operational integrity
9. Patterns (/patterns) - Pattern recognition categories
10. Philosophy (/philosophy) - Restraint, long-horizon thinking, clarity
11. Documentation (/documentation) - Technical documentation sections
12. Contact (/contact) - Form with validation

### Backend (server/)
- Express.js
- In-memory storage for contact messages
- POST /api/contact endpoint

### Shared (shared/)
- schema.ts with contactMessages table and types

## Design Principles
- Calm authority, no buzzwords
- Dark cosmic aesthetic (deep space black, indigo, purple gradients)
- Short declarative sentences
- No hype or marketing language
- Signal integrity over volume

## Key Files
- client/src/index.css - Cosmic dark theme CSS variables
- client/src/components/layout/ - Navigation, Footer, PageLayout
- client/src/pages/ - All 13 page components
- design_guidelines.md - Complete design system reference
