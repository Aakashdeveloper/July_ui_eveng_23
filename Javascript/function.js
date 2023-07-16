//es5
var a = 10;
var b = 20;
a+b
30

var a = 11;
var b = 9;
a+b
20

function add(a,b){
    return a+b
}

add(1,2)
3
add(9,3)
12
add(111.4333,35353)
35464.4333

function isEven(userInput){
    let output = 0;
    if(userInput%2 == 0){
        output = `Number ${userInput} is even`
    }else{
        output = `Number ${userInput} is odd`
    }
    return output
}

isEven(10)
'Number 10 is even'
isEven(11)
'Number 11 is odd'


function add(a,b,c){
    return a+b+c
}

add(1,2)
NaN
add(1,2,4)
7

//es6
let add1 = (a,b) => {return a+b}
undefined
add1(3,7)
10

