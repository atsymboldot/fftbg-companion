import { MATCHUPS, TEAMS } from "../constants";

// Based on Mustad.io: https://github.com/SirBraneDamuj/mustadio/blob/master/src/data/matchups.js
const DEFAULT_MATCHUP = ['red', 'blue'];

const determineMatchup = (winners: string[]) => {
  const matchNumber = winners.length;
  if (matchNumber < 4) {
    return MATCHUPS[matchNumber][0];
  }

  if (matchNumber < 6) {
    const winnerOne = MATCHUPS[matchNumber].find(matchup => matchup[0] === winners[matchNumber === 4 ? 0 : 1])?.[0];
    const winnerTwo = MATCHUPS[matchNumber].find(matchup => matchup[1] === winners[matchNumber === 5 ? 2 : 3])?.[0];
    if (winnerOne && winnerTwo) {
      return MATCHUPS[matchNumber].find(([teamOne, teamtwo]) => teamOne === winnerOne && teamtwo === winnerTwo);
    }
    return DEFAULT_MATCHUP;
  }

  if (matchNumber < 8) {
    const winnerOne = MATCHUPS[matchNumber].find(matchup => matchup[0] === winners[matchNumber === 6 ? 4 : 5])?.[0];
    const winnerTwo = MATCHUPS[matchNumber].find(matchup => matchup[1] === winners[matchNumber === 7 ? 6 : 7])?.[0];
    if (winnerOne && winnerTwo) {
      return MATCHUPS[matchNumber].find(([teamOne, teamtwo]) => teamOne === winnerOne && teamtwo === winnerTwo);
    }
    return DEFAULT_MATCHUP;
  }

  const winner = TEAMS.find(team => team === winners[matchNumber]);

  if (winner) {
    return MATCHUPS[matchNumber][TEAMS.indexOf(winner)];
  }

  return DEFAULT_MATCHUP;
}

export default determineMatchup;