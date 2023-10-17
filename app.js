const students = [
{ 
firstName: "Sally",
lastName: "Peach",
fav: ["Rats", "Birds"],
female: true,
},

{
firstName: "Ronald",
lastName: "Apple",
fav: ["Hamster", "Cats"],
female: false,
},

{
firstName: "Jack",
lastName: "Orange",
fav: ["Snakes", "Spiders"],
female: true,
},

{
firstName: "Karen",
lastName: "Kiwi",
fav: ["Dogs", "Cats"],
female: false,
}
];


students.forEach((student)=> {
    console.log(student.firstName)
    console.log(student.lastName)
    console.log(student.female)
    student.fav.forEach((el)=> 
        console.log(el)
    )
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