Array is a collection of homogeneous & heterogeneous
 
let a = [1, 2, 3, 4] // Array of numbers
let b = ["Aa","Bb","Test","Hii","Hey"] // Array of string
let c = [true,false,false,true] // Array of boolean

let d = [33,45,"Test","Hey",true,34,"Hi"];

let city = ["Delhi","Mumbai","London","Venice"];
undefined
city.length
4
city[0]
'Delhi'
city[1]
'Mumbai'
city.push('Hongkong')
5
city
(5) ['Delhi', 'Mumbai', 'London', 'Venice', 'Hongkong']
city.push('Amsterdam')
6
city
(6) ['Delhi', 'Mumbai', 'London', 'Venice', 'Hongkong', 'Amsterdam']
city.unshift('Innsburg')
7
city
(7) ['Innsburg', 'Delhi', 'Mumbai', 'London', 'Venice', 'Hongkong', 'Amsterdam']

city
(7) ['Innsburg', 'Delhi', 'Mumbai', 'London', 'Venice', 'Hongkong', 'Amsterdam']
city.pop()
'Amsterdam'
city

['Innsburg', 'Delhi', 'Mumbai', 'London', 'Venice', 'Hongkong']

city.pop(2)

'Hongkong'
city.shift()
'Innsburg'

push > add value in end of array
pop > remove the last value
unshift > add value in the begining of the array
shift > remove the first value


let city =  ['Innsburg', 'Delhi', 'Mumbai', 'London', 'Venice', 'Hongkong', 'Amsterdam']
undefined
city.slice(2)
(5) ['Mumbai', 'London', 'Venice', 'Hongkong', 'Amsterdam']
city.slice(1)
(6) ['Delhi', 'Mumbai', 'London', 'Venice', 'Hongkong', 'Amsterdam']
city.slice(1,5)
(4) ['Delhi', 'Mumbai', 'London', 'Venice']
city.slice(-1)
['Amsterdam']
city.slice(0,-1)
(6) ['Innsburg', 'Delhi', 'Mumbai', 'London', 'Venice', 'Hongkong']
city
(7) ['Innsburg', 'Delhi', 'Mumbai', 'London', 'Venice', 'Hongkong', 'Amsterdam']


splice(index,deleteCount,values)

let city =  ['Innsburg', 'Delhi', 'Mumbai', 'London', 'Venice', 'Hongkong', 'Amsterdam']
undefined
city.splice(3,0,'Pune','Boston')
[]
city
(9) ['Innsburg', 'Delhi', 'Mumbai', 'Pune', 'Boston', 'London', 'Venice', 'Hongkong', 'Amsterdam']
city.splice(4,1)
['Boston']
city
(8) ['Innsburg', 'Delhi', 'Mumbai', 'Pune', 'London', 'Venice', 'Hongkong', 'Amsterdam']
city.splice(5,1,'Indore')
['Venice']
city
(8) ['Innsburg', 'Delhi', 'Mumbai', 'Pune', 'London', 'Indore', 'Hongkong', 'Amsterdam']


let city =  ['Innsburg', 'Delhi', 'Mumbai', 'London', 'Venice', 'Hongkong', 'Amsterdam']
undefined
city.indexOf('Delhi')
1
city.indexOf('Amsterdam')
6
city.indexOf('Pune')
-1
city.indexOf('Boston')
-1
city.includes('London')
true
city.includes('Boston')
false

let a = "Hii"
let b = ["Hiii"]
undefined
Array.isArray(a)
false
Array.isArray(b)
true
