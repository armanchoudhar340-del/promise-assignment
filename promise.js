
// Promise-based Recruitment Evaluation System

// Question 1: Coding Assessment
function codingScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let total = marks.reduce((sum, mark) => sum + mark, 0);
            let average = total / marks.length;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry, you have not cleared the Coding Assessment.");
            }
        }, 2000);
    });
}


// Question 2: Technical Interview
function technicalInterviewCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let total = marks.reduce((sum, mark) => sum + mark, 0);
            let average = total / marks.length;

            if (average >= cutoff) {
                resolve(average);
            } else {
                reject("Sorry, you have not cleared the Technical Interview.");
            }
        }, 2000);
    });
}


// Question 3: Final Selection Review
function finalSelectionCheck(codingAverage, technicalAverage, cutoff) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let finalAverage = (codingAverage + technicalAverage) / 2;

            if (finalAverage >= cutoff) {
                resolve(finalAverage);
            } else {
                reject("Sorry, you have not cleared the final selection cutoff.");
            }
        }, 2000);
    });
}


// Calling all three functions
codingScoreCheck([80, 75, 85, 90, 70], 75)
    .then((codingAverage) => {
        console.log("Coding Assessment cleared!");
        console.log("Coding Average:", codingAverage);

        return technicalInterviewCheck([78, 82, 76, 85, 80], 75);
    })
    .then((technicalAverage) => {
        console.log("Technical Interview cleared!");
        console.log("Technical Average:", technicalAverage);

        return finalSelectionCheck(80, technicalAverage, 75);
    })
    .then((finalAverage) => {
        console.log("Final Selection cleared!");
        console.log("Final Average:", finalAverage);
        console.log("Congratulations! You have been selected.");
    })
    .catch((error) => {
        console.log(error);
    });

