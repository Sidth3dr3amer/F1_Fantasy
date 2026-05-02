import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import authRoutes from './src/api/auth/auth.routes.js';
import userRoutes from './src/api/users/users.routes.js';
import leagueRoutes from './src/api/leagues/leauges.routes.js';
import teamRoutes from './src/api/teams/teams.routes.js';
import raceRoutes from './src/api/races/races.routes.js';
import resultRoutes from './src/api/results/results.routes.js';
import leaderboardRoutes from './src/api/leaderboard/leaderboard.routes.js';
import driverRoutes from './src/api/drivers/drivers.routes.js';
import constructorRoutes from './src/api/constructors/constructors.routes.js';
import adminRoutes from './src/api/admin/admin.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/leagues', leagueRoutes);
app.use('/teams', teamRoutes);
app.use('/races', raceRoutes);
app.use('/results', resultRoutes);
app.use('/leaderboard', leaderboardRoutes);
app.use('/drivers', driverRoutes);
app.use('/constructors', constructorRoutes);
app.use('/admin', adminRoutes);

app.listen(4000, () => {
    console.log('Server running on port 4000');
});