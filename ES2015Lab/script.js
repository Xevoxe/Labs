let favMovie = (movie = "The Room",name) => console.log(`My name is ${name} and my favorite movie is ${movie}`);

favMovie("Batman","joe");

let getFirstName = name => {
    let fname = name.split(" ");
    return fname[0];
}

let getFirstNameConcise = name => (name.split(" "))[0];

console.log(getFirstName("Joseph Arellano"));
console.log(getFirstNameConcise("Joseph Arellano"));

let numbers = (x,y) => ({
    exponent: Math.pow(x,y),
    product: x*y
});

let answer = numbers(2,2);

console.log(`Exponent = ${answer.exponent} and Product = ${answer.product}`);

let arr = ["Paul","Birmingham","Kimchi"]
let spreadfunc = (name,location,food) => {
    console.log(`Name ${name}, City ${location}, Food ${food}`);
}

spreadfunc(...arr);

let name = "Joe";
spreader(name);

function spreader(value){
    let arr = [...value];

    for( var i = 0 ; i < arr.length; i++){
        console.log(arr[i]);
    }
}