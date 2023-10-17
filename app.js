const students = [
{ 
firstName: "Sally",
lastName: "Peach",
fav: [1,5,9,13],
female: true,
},

{
firstName: "Ronald",
lastName: "Apple",
fav: [2,6,10,14],
female: false,
},

{
firstName: "Jack",
lastName: "Orange",
fav: [3,7,11,15],
female: true,
},

{
firstName: "Karen",
lastName: "Kiwi",
fav: [4,8,12,16],
female: false,
}
];


students.forEach((element)=> {
    console.log(element.firstName)
    console.log(element.lastName)
    console.log(element.female)
});

students.fav.forEach((fav) => {
console.log(nums[fav])
});

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