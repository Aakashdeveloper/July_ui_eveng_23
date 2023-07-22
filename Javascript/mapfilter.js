Map
> map is use to iterate over the array
> it always return the same length of output array as input
> it is use to apply logics(add,sub,mul,div, bind in html)

let a = [4,56,9,11,7,34,16,23,9,6,18,27]
a.map((data) => {return data*2})
(12) [8, 112, 18, 22, 14, 68, 32, 46, 18, 12, 36, 54]




let a = [4,56,9,11]
a.map((data) => {return `<p>${data*2}</p>`})
 ['<p>8</p>', '<p>112</p>', '<p>18</p>', '<p>22</p>']


filter
> Filter is use to filter out the value
> It may or maynot return same length of output array as input
> It only return those values for which conditon or output is true

let a = [4,56,9,11,7,34,16,23,9,6,18,27]
a.filter((data) => {return data>20})
[56, 34, 23, 27]