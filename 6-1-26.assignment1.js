// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:

//     1. filter() temperatures above 35
let filteredTemperatures = temperatures.filter((e) => e > 35)
console.log("filteredTemperatures : ", filteredTemperatures)

//     2. map() to convert all temperatures from Celsius → Fahrenheit
//1*c = ? (9/5) + 32 
let convertToFahrenheit = temperatures.map((e) => e * (9 / 5) + 32)
console.log("convertToFahrenheit : ", convertToFahrenheit)

//     3. reduce() to calculate average temperature
let averageTemperature = temperatures.reduce((acc, e) => acc + e) / temperatures.length
console.log("average Temperaature : ", averageTemperature)

//     4. find() first temperature above 40
let temperatureAbove40 = temperatures.find((e) => e > 40)
console.log("temperatureAbove40 : ", temperatureAbove40)

//     5. findIndex() of temperature 28
let findIndex = temperatures.findIndex((e) => e === 28)
console.log("findIndex : ", findIndex)
