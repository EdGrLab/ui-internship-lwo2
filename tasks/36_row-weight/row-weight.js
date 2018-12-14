export function rowWeights(players) {
  let team1 = 0;
  let team2 = 0;
  players.forEach(function(pl, index) {
    (index + 1) % 2 !== 0 ? team1 += pl: team2 += pl;
  });
  return [team1, team2];
}
