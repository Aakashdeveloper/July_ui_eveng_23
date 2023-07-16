es5 > Ecma Script 5
es6 > Ecma Script 6

Datatype

String = "Hii" 'hey' "10" 'true' `Test`
Number = 10 335 3534534634 33.23 .353
Boolean = true false


//es5
var a = 10
var b = "Hii"
var c = true


typeof(a)
'number'
typeof(b)
'string'
typeof(c)
'boolean'

var d = "9"
typeof(d)
'string'

var e = 10.11
typeof(e)
'number'


var a = 10
var b = 20

a+b
30
a-b
-10
a*b
200
a/b
0.5

4%2
0
4%3
1

2%4
2
3%4

///////
var a = "Hiii"
var b = "JavaScript"
undefined
a+b
'HiiiJavaScript'
a-b
NaN (Not a Number)
a*b
NaN
a/b
NaN
a%b
NaN


var c = 10
a+c
'Hiii10'

string+string = string
string+number = string
number+string = string
number+number = number

10+"20"+30
"1020"+30
'102030'

10+20+"30"
30+"30"
'3030'

"10"+20+30
"1020"+30
'102030'


10+"20"+30-1
10+20+"30"-1
"10"+20+30-1

10+"20"+30-1
102029
10+20+"30"-1
3029
"10"+20+30-1
102029


"Hii"-1
NaN
"10"-1
9
"10a"-1
NaN
10-"2"
8
10-"2j"
NaN
"10"*"9"
90


var a = true
var b = false

true+true
2
true+false
1
10/false
Infinity
10+true
11

true is equal to 1
false is equal to 0

"10"+"1"
'101'


var a = "10"
var b = "1"

var a = "10"
var b = "1"

parseInt(a)+parseInt(b)
11
parseInt(a+b)
101
var c = "20.11"
undefined
var d = "11.82"
undefined
parseInt(c)+parseInt(d)

31
parseFloat(c)+parseFloat(d)
31.93



var a = "10a"
var b = "1"

var a = "10a"
undefined
parseInt(a)
10
var a = "a10a"
undefined
parseInt(a)
NaN
var a = "10a9"
undefined
parseInt(a)
10
Number(a)
NaN


//es6
var a = "10"
var b = "1"

Number(a)+Number(b)
11