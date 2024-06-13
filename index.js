// We import the object from the data file. Inside that object there is a function to get players data
const data = require("./data");

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

// Your code
const logPlayers = (players) => {
  players.forEach((player, idx) => {
    console.log(`PLAYER ${idx + 1}\nNAME: ${player.name}\nLASTNAME: ${player.lastname}\nPOSITION: ${player.position}`);
  });
};

logPlayers(data.getPlayers());


/**
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered by name length descending
 */

// Your code
const logOrderedNames = (players) => {
  players.sort((playerA, playerB) => playerB.name.length - playerA.name.length);
  console.log(players.map((player) => player.name));
};

logOrderedNames(data.getPlayers());




/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, each of them has a 0.11 scoringChance, the total number of goals will be 1.1 average
 * Output example -> Goals per match: 2.19
 */

// Your code
const logAverageGoals = (players) => {
  let numberOfGoals = 0;

  players.forEach((player) => {
    numberOfGoals += player.scoringChance / 100;
  });

  console.log(`Goals per match: ${numberOfGoals.toFixed(2)}`);
};

logAverageGoals(data.getPlayers());


/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name (by position it means striker, goalkeeper...)
 */

// Your code
const searchPosition = (players) => {
  console.log('Enter player name:');
  process.stdin.on('data', (data) => {
    const input = data.toString().trim().toLowerCase();
    const foundPlayer = players.find((player) => player.name.toLowerCase() === input);

    if (foundPlayer) {
      console.log(`POSITION: ${foundPlayer.position}`);
    } else {
      console.warn(`Player not found with name ${input}!`);
    }

    process.stdin.pause();
  });
};

searchPosition(data.getPlayers());


/**
 * Test 5
 * Write a function that splits all the players randomly into 2 teams, Team A and Team B. Both teams should have same number of players.
 * The function should log the match score, using the average number of goals like the Test 3 and rounding to the closest integer
 * Example:
 *      Team A has 4 players, 2 with 50 scoringChance and 2 with 70 scoringChance.
 *      The average score for the team would be 2.4 (50+50+70+70 / 100), and the closest integer is 2, so the Team A score is 2
 */

// Your code
const getAverageGoals = (players) => {
  let numberOfGoals = 0;

  players.forEach((player) => {
    numberOfGoals += player.scoringChance / 100;
  });

  return numberOfGoals
};

const getMatchGoals = (players) => {
  const shuffledPlayers = players.sort(() => 0.5 - Math.random());
  const playersHalf = Math.ceil(players.length / 2);

  const teamA = shuffledPlayers.slice(0, playersHalf);
  const teamB = shuffledPlayers.slice(playersHalf);

  console.log(`Team A: ${Math.round(getAverageGoals(teamA))} - Team B: ${Math.round(getAverageGoals(teamB))}`);
};

getMatchGoals(data.getPlayers());