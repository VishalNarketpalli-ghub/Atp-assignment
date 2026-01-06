// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];

// Tasks:
//     1. filter() courses with name length > 5
let longNamedCourses = courses.filter((e) => e.length > 5)
console.log("longNamedCourses : ", longNamedCourses)
//     2. map() to convert course names to uppercase
let uppercaseCourses = courses.map((e) => e.toUpperCase())
console.log("uppercaseCourses : ", uppercaseCourses)
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let courseString = courses.reduce((acc, e) => acc + " | " + e.toUpperCase())
console.log("courseString : ", courseString)

//     4. find() the course "react"
let findReactCourse = courses.find((e) => e === "react")
console.log("findReactCourse : ", findReactCourse)
//     5. findIndex() of "node"
let findNodeIndex = courses.findIndex((e) => e === "node")
console.log("findNodeIndex : ", findNodeIndex)
