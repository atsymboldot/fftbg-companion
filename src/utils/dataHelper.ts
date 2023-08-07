import { BASE_API_URL } from "../constants";
import { Team, Tournament } from "../models";
// import fetchJSON from "./fetch";
import determineMatchup from "./matchup";

// TODO: Once id is gotten and tournament is retrieved, only need first call to determine winners

// const getData = async (): Promise<[Team, Team]> => {
//   const id = (await (await fetch('https://fftbg.com/api/tournaments?limit=1')).json() as Tournament[])[0].ID.toString();
//   const tournament = (await (await fetch(`https://fftbg.com/api/tournament/${id}`)).json() as Tournament);

//   const matchup = determineMatchup(tournament.Winners);

//   if (matchup) return [tournament.Teams[`${matchup[0]}`], tournament.Teams[`${matchup[1]}`]];
//   return [tournament.Teams.red, tournament.Teams.blue];
// }

const getData = async (): Promise<[Team, Team]> => {
  // const id = (await (await fetchJSON('https://fftbg.com/api/tournaments?limit=1')).json() as Tournament[])[0].ID.toString();
  const id = (await (await fetch(`${BASE_API_URL}tournaments?limit=1`)).json() as Tournament[])[0].ID.toString();
  const tournament = (await (await fetch(`${BASE_API_URL}tournament/${id}`)).json() as Tournament);

  const matchup = determineMatchup(tournament.Winners);

  if (matchup) return [tournament.Teams[`${matchup[0]}`], tournament.Teams[`${matchup[1]}`]];
  return [tournament.Teams.red, tournament.Teams.blue];
}

export default getData;

    