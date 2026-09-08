# Promise-Based Recruitment Evaluation System

## Student Details

**Name:** Arman Choudhary

**Roll Number:** 150096725075

**Department:** Computer Science & Engineering

**University:** ITM Skills University

---

## Project Title

**Promise-Based Recruitment Evaluation System**

---

## Description

This project demonstrates the use of **JavaScript Promises** in a real-world recruitment evaluation process.

The recruitment process consists of three stages:

1. Coding Assessment
2. Technical Interview
3. Final Selection Review

Each stage uses a JavaScript Promise with `setTimeout()` to simulate a 2-second processing time.

---

## Features

* Uses JavaScript Promises
* Uses `resolve()` and `reject()`
* Uses `setTimeout()` with a 2-second delay
* Calculates average marks
* Checks marks against the required cutoff
* Uses `.then()` for successful results
* Uses `.catch()` for failure messages
* Implements Promise chaining

---

## Functions Implemented

### 1. Coding Assessment

**Function:** `codingScoreCheck(marks, cutoff)`

This function:

* Accepts an array of coding assessment marks.
* Calculates the average score.
* Resolves the Promise if the average is greater than or equal to the cutoff.
* Rejects the Promise if the candidate does not clear the Coding Assessment.

---

### 2. Technical Interview

**Function:** `technicalInterviewCheck(marks, cutoff)`

This function:

* Accepts an array of technical interview marks.
* Calculates the average score.
* Resolves the Promise if the average is greater than or equal to the cutoff.
* Rejects the Promise if the candidate does not clear the Technical Interview.

---

### 3. Final Selection Review

**Function:** `finalSelectionCheck(codingAverage, technicalAverage, cutoff)`

This function:

* Accepts the coding average, technical average, and final cutoff.
* Calculates the final average.
* Resolves the Promise if the final average is greater than or equal to the cutoff.
* Rejects the Promise if the candidate does not clear the final selection cutoff.

---

## Technologies Used

* JavaScript
* Node.js
* JavaScript Promises

---

## Concepts Used

* Promise
* `resolve()`
* `reject()`
* `setTimeout()`
* `.then()`
* `.catch()`
* Promise Chaining
* Arrays
* `reduce()`
* Average Calculation
* Conditional Statements

---

## How to Run

### Step 1: Save the File

Save the JavaScript file as:

```text
promiseAssignment.js
```

### Step 2: Open Terminal

Open the terminal in the project folder.

### Step 3: Run the Program

```bash
node promiseAssignment.js
```

---

# Screenshots





---

## Output

<img width="492" height="182" alt="image" src="https://github.com/user-attachments/assets/5d5a3069-e20b-4dbd-aef0-9b7c395c1799" />


## Conclusion

This project demonstrates how JavaScript Promises can be used to handle asynchronous tasks in a recruitment evaluation system.

The three recruitment stages are executed using Promise chaining. Successful stages are handled using `.then()`, while failed stages are handled using `.catch()`. The use of `setTimeout()` simulates real-world processing time for each stage.
