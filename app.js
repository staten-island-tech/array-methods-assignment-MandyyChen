const students = [
{ 
firstName: "Sally",
lastName: "Peach",
},
{
firstName: "Ronald",
lastName: "Apple",
},
{
firstName: "Jack",
lastName: "Orange",
},
{
firstName: "Karen",
lastName: "Kiwi"
}
];


students.forEach(element => console.log(element.firstName));
//arrays store items and can access items by their index starting at 0
/*const nums = [1, 2, 3, 4, 5];
console.log(nums[nums.length - 1]);

//foreach to run function on every item (for loop)
nums.forEach((el)=> console.log(el))*/
//arrow functions ()=> are simpler, auto return its output, this keyword changes
const graduates = students.filter((student) => student.graduated);
console.log(graduates);

// can use !== true or === false to demonstrate is something is false
const current = students.filter((student) => student.graduated !== true);
console.log(current);