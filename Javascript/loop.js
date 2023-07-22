for
while
dowhile
for of >array
for in > object

Map
filter

////////////////////////////////////////////////////////////////
for > help to generate series of value as well as to iterate over the array



for(let i= 0;i<5;i++){
    console.log(i)
}
0
1
2
3
4


let city = ["Delhi","Mumbai","London","Venice"];
for(let i =0;i<city.length;i++){
    console.log(city[i])
}

Delhi
Mumbai
London
Venice

////////////////////////////////////////////////////////////////////////
while
////////////////////////////////////////////////////////////////////////
let i = 10
while(i<5){
    console.log(i);
    i++
}

////////////////////////////////////////////////////////////////
do while
////////////////////////////////////////////////////////////////


let i = 10
while(i<5){
    console.log(i);
    i++
}

undefined
let i = 10;
do{
    console.log(i);
    i++
}
while(i<5)
VM1531:3 10
10


//////
for of
//////
let city = ["Delhi","Mumbai","London","Venice"];
for(mycity of city){
    console.log(mycity)
}
VM1535:3 Delhi
VM1535:3 Mumbai
VM1535:3 London
VM1535:3 Venice
