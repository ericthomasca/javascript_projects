"use strict"
const scores = [];

let score = 0; 
do {
    score = parseInt(prompt("Enter a test score, or enter -1 to end scores", -1));
    
    if (score >= 0 && score <= 100) { 
        scores.push(score);
    } 
    else if (score != -1 || isNaN(score)) { 
        alert("Score must by a valid number from 0 through 100"); 
    } 
}   while(score != -1); 
    
if (scores.length > 0) {
    let total = 0;
    for (let i in scores) { 
        total = total + scores[i];
        document.write(`<h4>Score ${parseInt(i) + 1}: ${scores[i]}</h4>`); 
    }
    let average = parseInt(total / scores.length); 
    document.write(`<h4>Average score is ${average}</h4>`);
    let max = 0;
    for (let index = 0; index < scores.length; index++) {
        if (scores[index] > max) {
            max = scores[index];
        }
    }
    document.write(`<h4>Highest score is ${max}</h4>`);
} 