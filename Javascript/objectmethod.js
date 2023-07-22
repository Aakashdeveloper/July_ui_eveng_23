let calc = {
    sum:function(a,b){return a+b},
    sub:function(a,b){return a-b}
}
undefined
calc.sum(10,3)
13
calc.sub(10,3)
7


let dbQuery = {
    find:(table) => {return `Select * from ${table}`},
    insert:(table,data) => {return `Insert into ${table} name,city values(${data.name},${data.city})`}
}

dbQuery.find('User')
'Select * from User'
dbQuery.insert('Students',{name:'John',city:'Keev'})
'Insert into Students name,city values(John,Keev)'