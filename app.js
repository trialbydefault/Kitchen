const myName = 'Alan';
const states = 50;
let result = 4 + 5;

/*alert - Hello World*/ 
function sayHello(){
alert('Hello world');
}
sayHello()


/* cheking human ages*/
function checkAge (name, age){
    if(age < 21){
        alert(`Sorry ${name}, you aren't old enough to view this page!`);
    } else {
        alert (`Welcome ${name}`);
    }
    
}

checkAge('Charles', 21 );
checkAge('Abby', 27 );
checkAge('James',18 );
checkAge('Jhon', 17 );

/* my favorite vegi */
let vegi = ['onion', 'garlic', 'pepper', 'celery', 'pickles']
for (let i = 0; i < vegi.length; i++) {
    let veg = vegi[i].slice(' ');
    console.log(veg);
}


/*How to check name and age via array */
const arrName = [
    {name: 'Charles', age: 20}, 
    {name: 'Body', age: 25},
    {name: 'Ani', age: 21},
    {name: 'Monica', age: 35},
    {name: 'Drew', age: 50},
]


    for (let i = 0; i < arrName.length; i++) {
        checkAge(arrName[i].name, arrName[i].age);
    };


    /* how to check word length */
function getLength (long){
    return long.length;
}



let got = getLength('Hello World');
if(got % 2 == 0 ) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!')
}