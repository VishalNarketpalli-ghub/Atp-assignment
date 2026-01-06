// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
let passMarks = marks.filter((e) => e >= 40)
console.log("passMarks : ", passMarks)
//     2. map() to add 5 grace marks to each student
let graceMarks = marks.map((e) => e + 5)
console.log("graceMarks : ", graceMarks)
//     3. reduce() to find highest mark
let highestMark = marks.reduce((acc, e) => Math.max(acc, e))
console.log("highestMark : ", highestMark)
//     4. find() first mark below 40
let firstMarkBelow40 = marks.find((e) => e < 40)
console.log("firstMarkBelow40 : ", firstMarkBelow40)
//     5. findIndex() of mark 92
let findIndexOf92 = marks.findIndex((e) => e === 92)
console.log("findIndexOf92 : ", findIndexOf92)