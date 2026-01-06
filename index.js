

/*
mutable -> can be changed
immutable -> cannaot be changed

all primitives are immutable

int a;  (declared a location undefinded)

a=10 (assigned 10 to a)

a+1 (the value of a is incremented but we dont have any name or erference to the variable so cannot be reached)

a=a+1 ( now the reference is changed to the updated value a)

10      11      =>    10    11
a  ->   ?              ?     a
*/

let emp = {
    eno: 1,
    name: "ravi"
}

//adding new property
emp.city = 123

//updating
emp.eno = 3

//deleting
//delete emp.name

//freez an obj
//Object.freeze(emp)
//after freezing we cannot change, doesnot throw error just ignores the update statements
//emp.eno = 5
//why is Object root? : because all objects are ultimately derived from Object.prototype


//console.log(Object.keys(emp)) //displays all keys
//console.log(Object.values(emp)) //displays all values
//console.log(emp) //displays both key alue pairs 



/*
object pack and unpack when inherited sent or reused 
to unpack we use destructre
*/

let test = {
    a: 10,
    b: 20,
    c: 30
}

//unpacking ---------               -----------
//let { x, y, z } = test
//console.log(x, y, z) //undefined undefined undefined


//let { a, b, c } = test
//console.log(a, b, c) //10 20 30 (key names have to be same)


//complex object
let student = {
    sno: 100,
    name: "ravi",
    marks: [60, 70, 80],
    address: {
        city: "hyderabad",
        pincode: 5660422
    },
    getData: function () {
        //obj processing busniess logic
        //find avg
        let avg = 0;
        let n = this.marks.length
        for (let i = 0; i < n; i++) {
            avg += this.marks[i]
        }
        avg = avg / n
        console.log("average is : ", avg)
    }
}
//student.getData()


//call back function : a function sent as argument to another function

function test1(a) {
    console.log(a())
}

//array-------         ---------               --------

let skills = ['html', 'css', 'javascript']

//accessing element(destructure)
let [skill1, skill2, skill3] = skills
//console.log(skill1)

//add at begining
skills.unshift("angular", "java")

//add at end
skills.push("python")

//at a index
skills.splice(2, 0, "telugu") // splice(start: number, deleteCount: number, ...items: string[]): string[] (+1 overload)


//delete at the begining
skills.shift()

//delete at end
skills.pop()

//delete at end
skills.splice(3, 1) //from index 3 remove 1 element

//console.log(skills)
/*
OTHER ARRAY OPERATION

let marks = [23,4,62,22,67]
let result1 = marks.filter(
function(element){
    return element>70
})
*/

//write a function that can extract marks grater than 70, pack them in to an array  and return it

//filter can only be used for selection 
let marks = [23, 4, 62, 15, 22, 67, 89]
let r1 = marks.filter((element) => {
    return (element > 13 && element < 19)
})
//console.log(r1)

//map (transfer or modify)
let salary = [100, 200, 300]

let res = salary.map(element => element + 50)

//console.log(res)

//reduse method used for aggrigation
//find sum of marks
let sum = marks.reduce((accumilator, element) => {
    let t = accumilator += element
    //console.log(t)
    return t
})
//console.log("sum is : ", sum)

let students = [
    { sno: 1, name: "ravi", age: 21 },
    { sno: 2, name: "malli", age: 45 },
    { sno: 3, name: "kcr", age: 26 },
    { sno: 4, name: "sus", age: 16 }
]

let a = students.map((studentObj) => {
    if (studentObj.name === "kcr") return studentObj.age += 2
    else return
})

// console.log(students)

let sumStdAge = students.reduce((acc, curr) => acc += curr.age, 0)

console.log(sumStdAge)

//functions --------                    -------------

