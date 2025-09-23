# Copilot Instructions for pawnstars-game-inspiration

## Project Overview
This is a SvelteKit-based game inspired by Pawn Stars, with a focus on item trading and customer interactions. The architecture is modular, separating UI, data, and server logic for maintainability and scalability.

## Key Components & Structure
- `src/lib/` — Core client-side logic and shared utilities
  - `store.ts` — Svelte store for global state management
  - `assets/` — Game images and icons
  - `data/` — Static data and price rules
  - `server/` — Item and customer generation logic (not actual backend, but server-like logic)
  - `types/` — TypeScript types for items and customers
- `src/routes/` — SvelteKit routing
  - `+layout.svelte`, `+page.svelte` — Main UI entry points
  - `api/` — SvelteKit endpoints for customer and item APIs
- `static/` — Public static files

## Data Flow & Patterns
- Game logic (item/customer generation) is in `src/lib/server/` and exposed via API routes in `src/routes/api/`
- UI components consume Svelte stores and fetch data from API endpoints
- TypeScript is used throughout for type safety; see `src/types/`
- Static data (items, names) is in JSON files under `src/lib/data/`
- Price rules and business logic are in `src/lib/data/priceRules.ts`

## Developer Workflows
- **Start dev server:** `npm run dev`
- **Build for production:** `npm run build`
- **Preview build:** `npm run preview`
- **Add dependencies:** Use `npm install <package>`
- **Type checking:** Run `tsc` or rely on IDE integration

## Project-Specific Conventions
- SvelteKit file-based routing: UI and API endpoints are colocated under `src/routes/`
- All game logic is client-side or in SvelteKit endpoints (no external backend)
- Use Svelte stores for global state
- TypeScript types are strictly defined in `src/types/`
- Images and assets are referenced via the `src/lib/assets/` directory

## Integration Points
- No external backend; all logic is in SvelteKit endpoints and local modules
- Static data and business rules are separated for easy updates
- API endpoints (`src/routes/api/`) are the main integration point for game logic

## Examples
- To add a new item type: update `src/lib/data/items.json` and `src/types/item.ts`
- To change price rules: edit `src/lib/data/priceRules.ts`
- To add a new customer name: update `src/lib/data/names.json`
- To expose new game logic: add to `src/lib/server/` and create a corresponding API route

## References
- [README.md](../../README.md) — SvelteKit setup and basic commands
- [SvelteKit Docs](https://kit.svelte.dev/docs)

---
If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions.
