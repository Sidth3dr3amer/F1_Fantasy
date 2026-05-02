# API Endpoints — Concise Reference

Auth
- POST /auth/register : Register new user
- POST /auth/login    : Login and receive JWT
- GET  /auth/me       : Get current authenticated user
- POST /auth/logout   : Logout (client-side token discard)
- POST /auth/refresh  : Refresh auth token

Users
- GET  /users               : List all users (admin)
- GET  /users/:id           : Get user profile
- PUT  /users/:id           : Update user profile
- DELETE /users/:id         : Delete user (admin)

Leagues
- GET  /leagues/public      : List public leagues
- POST /leagues/create      : Create a new league
- POST /leagues/join        : Join league by code
- GET  /leagues             : Get user's leagues
- GET  /leagues/:id         : Get league details
- DELETE /leagues/:id       : Delete league

Teams
- POST /teams/build         : Build or update a team for a race
- POST /teams/lock          : Lock current user's team
- GET  /teams/:raceId       : Get current user's team for a race (query: leagueId)
- POST /teams/unlock        : Admin: unlock a team
- POST /teams/auto-lock/:raceId : Admin: lock all teams for a race

Races
- GET  /races              : List races
- GET  /races/:id          : Get race details
- POST /races              : Create race (admin)
- PUT  /races/:id          : Update race (admin)

Results
- GET  /results/:raceId    : Get race results
- POST /results            : Submit results (admin)
- PUT  /results/:raceId    : Update results (admin)

Leaderboard
- GET /leaderboard/:leagueId              : Season leaderboard for league
- GET /leaderboard/:leagueId/race/:raceId : Per-race leaderboard

Drivers
- GET  /drivers            : List all drivers
- GET  /drivers/:id        : Driver details
- POST /drivers            : Create driver (admin)
- PUT  /drivers/:id        : Update driver (admin)
- DELETE /drivers/:id      : Delete driver (admin)

Constructors
- GET  /constructors       : List all constructors
- GET  /constructors/:id   : Constructor details
- POST /constructors       : Create constructor (admin)
- PUT  /constructors/:id   : Update constructor (admin)
- DELETE /constructors/:id : Delete constructor (admin)

Middleware (short)
- protect : Verifies JWT and sets `req.user`
- isAdmin : Verifies admin role on `req.user`

(End)