"use strict";

// For first Commit

///////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/

function bmi_finder(mass, height) { return mass / (height ** 2) };

const Mark_kg1 = 78;
const Mark_m1 = 1.69;
const Mark_kg2 = 92;
const Mark_m2 = 1.95;

const John_kg1 = 95;
const John_m1 = 1.88;
const John_kg2 = 85;
const John_m2 = 1.76;

let result4Mark = ` Mark's BMI's are ${bmi_finder(Mark_kg1, Mark_m1)} and ${bmi_finder(Mark_kg2, Mark_m2)}.`;
let result4John = ` John's BMI's are ${bmi_finder(John_kg1, John_m1)} and ${bmi_finder(John_kg2, John_m2)}.`;






// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 😉
GOOD LUCK 😀
*/

let markBmi_1 = bmi_finder(Mark_kg1, Mark_m1);
let markBmi_2 = bmi_finder(Mark_kg2, Mark_m2);

let johnBmi_1 = bmi_finder(John_kg1, John_m1);
let johnBmi_2 = bmi_finder(John_kg2, John_m2);

function versusChecker(Marks, Johns) {
    if (Marks > Johns) { return `Marks BMI (${Marks}) is higher than Johns (${Johns})` }
    else if (Johns > Marks) { return `Johns BMI(${Johns}) is higher than Marks (${Marks})` }
    else { return "OMG They BMI' are equal" }

}


/*

/ Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/

let Dolphins = [97, 112, 101];
let Koalas = [109, 95, 123];

let Dolphins2 = [96, 108, 89];
let Koalas2 = [88, 91, 110];

let Dolphins3 = [97, 112, 101];
let Koalas3 = [109, 95, 106];


function checkWinner(team1, team2) {
    let firstTeamPoints = [];
    let secondTeamPoints = [];

    function pointsChecker(team, pointsArray) {
        for (let i = 0; i < team.length; i++) {
            if (team[i] > 100) { pointsArray.push(team[i]) }

        }
    }

    pointsChecker(team1, firstTeamPoints);
    pointsChecker(team2, secondTeamPoints);


    function finalPoints(team) {
        let points = 0;
        for (let i = 0; i < team.length; i++) {
            points += team[i];
        }
        return points / team.length;
    }

    let avgOfFirstTeam = finalPoints(firstTeamPoints);
    let avgOfSecondTeam = finalPoints(secondTeamPoints);
    if (avgOfFirstTeam > avgOfSecondTeam) { return "Team 1 wins" }
    else if (avgOfFirstTeam < avgOfSecondTeam) { return "Team 2 wins" }
    else { return "DRAW" }

}



// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
TEST DATA: Test for bill values 275, 40 and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/
