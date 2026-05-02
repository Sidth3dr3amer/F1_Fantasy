**Priority-ordered Implementation Plan**

1) Fix backend runtime error and boot server
   - Run `cd Backend && npm run dev`, capture logs, fix syntax/import/route typos so server starts.

2) Secure & stabilize API
   - Ensure CORS and `protect` (JWT) middleware are applied to correct routes.
   - Standardize API path prefixing (choose `/api` or root) and set `VITE_API_BASE` accordingly.

3) Core team management (critical)
   - Implement `POST /teams` (save team) with validation: 5 drivers, 1 constructor, unique drivers.
   - Enforce budget checks using drivers/constructors pricing.
   - Add endpoints: `GET /teams/:leagueId/:raceId` (get my team), `PUT /teams/:id/lock`, `DELETE/PUT` as needed.
   - Auto-lock teams at `race.raceStart` (cron or scheduler).

4) Race lifecycle & results ingestion
   - Implement race create/update endpoints and persist `raceStart`/`raceEnd` fields.
   - Compute race `status` (Scheduled/Ongoing/Completed) server-side.
   - Provide `POST /results` (admin) to submit results and `GET /results/:raceId`.

5) Scoring pipeline (post-game)
   - After results ingestion, calculate team points: map positions to points, apply fastest-lap bonus and DNF penalties.
   - Persist per-race `Points` and update season totals for users.

6) Leaderboards & live updates
   - Implement leaderboard endpoints: `GET /leaderboard/:leagueId`, `GET /leaderboard/:leagueId/race/:raceId`.
   - Add live update mechanism (websocket or efficient polling) to push leaderboard changes during a race.

7) Drivers / Constructors / User profiles
   - Add CRUD endpoints for drivers and constructors (including prices/stats).
   - Implement user/profile endpoints for managing user settings and fetching profile totals.

8) Frontend wiring & UX polish
   - Make `LeagueDropdown` fetch live user/public leagues.
   - Pre-load and display existing team in `TeamBuilder`, show locked state and prevent edits when locked.
   - Ensure all frontend API calls match backend paths; switch to single `VITE_API_BASE`.
   - Add loading/error states and lightweight retries; consider SWR/React Query for caching.

9) Admin UI & testing
   - Add admin results UI to submit results and trigger scoring.
   - Run end-to-end local tests and fix integration issues.

Notes
   - The backend already contains controllers for leagues, races, results, teams, and auth; primary gaps are runtime errors, drivers/constructors CRUD, team-save/locking, scoring persistence, and live updates.

If you want, I can start by running the backend to capture the current error and then proceed to implement the highest-priority API (team save + validation).*** End Patch
