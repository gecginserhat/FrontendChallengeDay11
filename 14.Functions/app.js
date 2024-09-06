// function definition

// function merhaba(name,age) {
//     if(typeof name === undefined) name = "no information";

//     if(typeof age === undefined) age = "no information";

//     console.log(`Name: ${name} Yaş: ${age}`);
// }

// merhaba("Serhat",23); // Function call
// merhaba();

// function square(x) {
//     return x * x;
// }
// function cube(x) {
//     return x*x*x;
// }
// let a = cube(square(12));

// console.log(a);



// function merhaba() {
//     return "Merhaba";
// }
// console.log(merhaba());


//Function Expression

// const merhaba = function(name) {
//     console.log("Merhaba" + name);
// };



//Immediately Invoked Function Expression(IIFE)
// (function(name){
//     console.log("Merhaba: " + name);
// })("Serhat");


const database = {
    host:"localhost",
    add: function(){
        console.log("Added to Database");
    },
    get: function() {
        console.log("Get from Database");
    },
    update:function(id){
        console.log(`Id: ${id} Updated`);
    },
    delete:function(id){
        console.log(`Id: ${id} Deleted`);
    }
    
}

console.log(database.host);

database.add();

database.delete(10);





