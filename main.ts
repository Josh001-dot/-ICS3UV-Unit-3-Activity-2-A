/**
 * @author Joshua Adeyemi
 * @version 1.0.0
 * @date 2025-12-05
 * @fileoverview This program will ask the user for their name, a course they are currently taking in school, and the last three test marks for that course. The output will be the student's name, their course, the three marks, and the average of the three test marks.
 */

// input (all const because they never change)
const userName: string = prompt("What is your name?") || "No name entered!";
const courseName: string = prompt("What course are you currently taking?") || "No course entered!";
const mark1AsString: string = prompt("Enter the first test mark:") || "0";
const mark2AsString: string = prompt("Enter the second test mark:") || "0";
const mark3AsString: string = prompt("Enter the third test mark:") || "0";

// process
const mark1AsNumber: number = parseInt(mark1AsString);
const mark2AsNumber: number = parseInt(mark2AsString);
const mark3AsNumber: number = parseInt(mark3AsString);
const averageMark: number = (mark1AsNumber + mark2AsNumber + mark3AsNumber) / 3;

// output
console.log("\n");
console.log("Hello, " + userName + "!");
console.log("You are taking: " + courseName + ".");
console.log("Your marks are: " + mark1AsNumber + ", " + mark2AsNumber + ", and " + mark3AsNumber + ".");
console.log("Your average mark is: " + averageMark + ".");
console.log("\nDone.");