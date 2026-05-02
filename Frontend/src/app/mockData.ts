export const MOCK_USERS = [
  { id: "u1", username: "MaxFan33", points: 1250 },
  { id: "u2", username: "LandoNorrisFan", points: 1120 },
  { id: "u3", username: "Charles16", points: 1080 },
  { id: "u4", username: "SirLewis", points: 950 },
  { id: "u5", username: "AlonsoMagic", points: 890 },
];

export const MOCK_LEAGUES = [
  { id: "l1", name: "Global F1 League", membersCount: 25400, rank: 1420 },
  { id: "l2", name: "Office Racing", membersCount: 12, rank: 3 },
  { id: "l3", name: "Friends of Monza", membersCount: 5, rank: 1 },
];

export const MOCK_DRIVERS = [
  { id: "d1", name: "Max Verstappen", team: "Red Bull Racing", price: 30.0, points: 320 },
  { id: "d2", name: "Lando Norris", team: "McLaren", price: 28.5, points: 295 },
  { id: "d3", name: "Charles Leclerc", team: "Ferrari", price: 27.5, points: 270 },
  { id: "d4", name: "Lewis Hamilton", team: "Ferrari", price: 26.5, points: 250 },
  { id: "d5", name: "Oscar Piastri", team: "McLaren", price: 25.5, points: 235 },
  { id: "d6", name: "George Russell", team: "Mercedes", price: 24.0, points: 210 },
  { id: "d7", name: "Carlos Sainz", team: "Audi", price: 22.5, points: 180 },
  { id: "d8", name: "Fernando Alonso", team: "Aston Martin", price: 20.0, points: 150 },
  { id: "d9", name: "Esteban Ocon", team: "Alpine", price: 16.0, points: 110 },
  { id: "d10", name: "Pierre Gasly", team: "Alpine", price: 15.5, points: 105 },
  { id: "d11", name: "Alex Albon", team: "Williams", price: 14.5, points: 95 },
  { id: "d12", name: "Lance Stroll", team: "Aston Martin", price: 13.0, points: 80 },
  { id: "d13", name: "Yuki Tsunoda", team: "RB", price: 12.5, points: 75 },
  { id: "d14", name: "Daniel Ricciardo", team: "RB", price: 12.0, points: 70 },
  { id: "d15", name: "Valtteri Bottas", team: "Stake F1 Team", price: 11.0, points: 60 },
  { id: "d16", name: "Zhou Guanyu", team: "Stake F1 Team", price: 10.5, points: 55 },
  { id: "d17", name: "Kevin Magnussen", team: "Haas", price: 10.0, points: 50 },
  { id: "d18", name: "Nico Hulkenberg", team: "Haas", price: 9.5, points: 48 },
  { id: "d19", name: "Logan Sargeant", team: "Williams", price: 8.5, points: 30 },
  { id: "d20", name: "Oliver Bearman", team: "Ferrari", price: 8.0, points: 25 },
];

export const MOCK_CONSTRUCTORS = [
  { id: "c1", name: "Red Bull Racing", price: 32.0, points: 550 },
  { id: "c2", name: "McLaren", price: 31.0, points: 530 },
  { id: "c3", name: "Ferrari", price: 30.0, points: 520 },
  { id: "c4", name: "Mercedes", price: 28.0, points: 450 },
  { id: "c5", name: "Aston Martin", price: 20.0, points: 260 },
  { id: "c6", name: "Audi", price: 18.0, points: 200 },
  { id: "c7", name: "Alpine", price: 17.0, points: 190 },
  { id: "c8", name: "RB", price: 15.0, points: 160 },
  { id: "c9", name: "Williams", price: 13.0, points: 140 },
  { id: "c10", name: "Haas", price: 12.0, points: 120 },
  { id: "c11", name: "Stake F1 Team", price: 11.0, points: 110 },
];
export const MOCK_RACES = [
  { id: "r1", name: "Bahrain Grand Prix", date: "2026-03-08", status: "Completed", locked: true },
  { id: "r2", name: "Saudi Arabian Grand Prix", date: "2026-03-15", status: "Completed", locked: true },
  { id: "r3", name: "Australian Grand Prix", date: "2026-03-29", status: "Completed", locked: true },
  { id: "r4", name: "Japanese Grand Prix", date: "2026-04-12", status: "Completed", locked: true },
  { id: "r5", name: "Chinese Grand Prix", date: "2026-04-19", status: "Completed", locked: true },
  { id: "r6", name: "Azerbaijan Grand Prix", date: "2026-04-26", status: "Completed", locked: true },

  { id: "r7", name: "Miami Grand Prix", date: "2026-05-03", status: "Scheduled", locked: true },
  { id: "r8", name: "Emilia Romagna Grand Prix", date: "2026-05-17", status: "Scheduled", locked: true },
  { id: "r9", name: "Monaco Grand Prix", date: "2026-05-24", status: "Scheduled", locked: true },
  { id: "r10", name: "Spanish Grand Prix", date: "2026-06-07", status: "Scheduled", locked: true },
  { id: "r11", name: "Canadian Grand Prix", date: "2026-06-14", status: "Scheduled", locked: true },

  { id: "r12", name: "Austrian Grand Prix", date: "2026-06-28", status: "Scheduled", locked: true },
  { id: "r13", name: "British Grand Prix", date: "2026-07-05", status: "Scheduled", locked: true },
  { id: "r14", name: "Hungarian Grand Prix", date: "2026-07-19", status: "Scheduled", locked: true },
  { id: "r15", name: "Belgian Grand Prix", date: "2026-07-26", status: "Scheduled", locked: true },

  { id: "r16", name: "Dutch Grand Prix", date: "2026-08-30", status: "Scheduled", locked: true },
  { id: "r17", name: "Italian Grand Prix", date: "2026-09-06", status: "Scheduled", locked: true },
  { id: "r18", name: "Singapore Grand Prix", date: "2026-09-20", status: "Scheduled", locked: true },

  { id: "r19", name: "Qatar Grand Prix", date: "2026-10-11", status: "Scheduled", locked: false },
  { id: "r20", name: "United States Grand Prix", date: "2026-10-18", status: "Scheduled", locked: false },
  { id: "r21", name: "Mexico City Grand Prix", date: "2026-10-25", status: "Scheduled", locked: false },
  { id: "r22", name: "Brazilian Grand Prix", date: "2026-11-01", status: "Scheduled", locked: false },

  { id: "r23", name: "Las Vegas Grand Prix", date: "2026-11-21", status: "Scheduled", locked: false },
  { id: "r24", name: "Abu Dhabi Grand Prix", date: "2026-11-29", status: "Scheduled", locked: false },
];

export const MOCK_RESULTS = [
  { driver: "Max Verstappen", pos: 1, fastestLap: true, dnf: false, points: 26 },
  { driver: "Lando Norris", pos: 2, fastestLap: false, dnf: false, points: 18 },
  { driver: "Charles Leclerc", pos: 3, fastestLap: false, dnf: false, points: 15 },
  { driver: "Carlos Sainz", pos: 4, fastestLap: false, dnf: false, points: 12 },
  { driver: "Sergio Perez", pos: "DNF", fastestLap: false, dnf: true, points: 0 },
];
