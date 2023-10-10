const students = [
{ 
firstName: "Sally",
lastName: "Peach",
nums: [2,4,6,3],
female: true,
},

{
firstName: "Ronald",
lastName: "Apple",
nums: [1,10,22,8],
female: false,
},

{
firstName: "Jack",
lastName: "Orange",
nums: [5,7,9,11],
female: true,
},

{
firstName: "Karen",
lastName: "Kiwi",
nums: [13,15,16,17],
female: false,
}
];


students.forEach(element => console.log(element.firstName));
students.forEach(element => console.log(element.lastName));
students.forEach(element => console.log(element.nums));
students.forEach(element => console.log(element.female));
//arrays store items and can access items by their index starting at 0
/*const nums = [1, 2, 3, 4, 5];
console.log(nums[nums.length - 1]);

//foreach to run function on every item (for loop)
nums.forEach((el)=> console.log(el))*/
//arrow functions ()=> are simpler, auto return its output, this keyword changes
const female = students.filter((student) => student.female);
console.log(female);

// can use !== true or === false to demonstrate is something is false
/* const current = students.filter((student) => student.graduated !== true);
console.log(current); */