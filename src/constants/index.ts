import { Team, TeamName } from "../models";

export const TEAMS: TeamName[] = ['red', 'blue', 'green', 'yellow', 'white', 'black', 'purple', 'brown', 'champion'];

export const MATCHUPS: TeamName[][][] = [
  // ROUND 1
  [
    [TEAMS[0], TEAMS[1]] // Matchup 1
  ],
  [
    [TEAMS[2], TEAMS[3]] // Matchup 2
  ],
  [
    [TEAMS[4], TEAMS[5]] // Matchup 3
  ],
  [
    [TEAMS[6], TEAMS[7]] // Matchup 4
  ],
  // ROUND 2 // Matchup 5
  [
    [TEAMS[0], TEAMS[2]],
    [TEAMS[0], TEAMS[3]],
    [TEAMS[1], TEAMS[2]],
    [TEAMS[1], TEAMS[3]],
  ], // Matchup 6
  [
    [TEAMS[4], TEAMS[6]],
    [TEAMS[4], TEAMS[7]],
    [TEAMS[5], TEAMS[6]],
    [TEAMS[5], TEAMS[7]],
  ],
  // ROUND 3 // Matchup 7
  [
    [TEAMS[0], TEAMS[4]],
    [TEAMS[0], TEAMS[5]],
    [TEAMS[0], TEAMS[6]],
    [TEAMS[0], TEAMS[7]],
    [TEAMS[1], TEAMS[4]],
    [TEAMS[1], TEAMS[5]],
    [TEAMS[1], TEAMS[6]],
    [TEAMS[1], TEAMS[7]],
    [TEAMS[2], TEAMS[4]],
    [TEAMS[2], TEAMS[5]],
    [TEAMS[2], TEAMS[6]],
    [TEAMS[2], TEAMS[7]],
    [TEAMS[3], TEAMS[4]],
    [TEAMS[3], TEAMS[5]],
    [TEAMS[3], TEAMS[6]],
    [TEAMS[3], TEAMS[7]],
  ],
  // ROUND 4 // Matchup 8
  [
    [TEAMS[0], TEAMS[8]],
    [TEAMS[1], TEAMS[8]],
    [TEAMS[2], TEAMS[8]],
    [TEAMS[3], TEAMS[8]],
    [TEAMS[4], TEAMS[8]],
    [TEAMS[5], TEAMS[8]],
    [TEAMS[6], TEAMS[8]],
    [TEAMS[7], TEAMS[8]],
  ],
];