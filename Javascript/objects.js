let mname = "Avengers"
let mrating = 4.3
let mind = "Hollywood"

let mname1 = "Jab we met"
let mrating1 = 4.5
let mind1 = "Bollywood"


let movies = {
    mname:"Avengers",
    mrating:4.3,
    mind:"Hollywood"
}
undefined
movies.mname
'Avengers'
movies.mrating
4.3
movies.mind
'Hollywood'
movies.type="Action"
'Action'
movies
{mname: 'Avengers', mrating: 4.3, mind: 'Hollywood', type: 'Action'}
movies.mrating=4.6
4.6
movies
{mname: 'Avengers', mrating: 4.6, mind: 'Hollywood', type: 'Action'}
delete movies.mind
true
movies
{mname: 'Avengers', mrating: 4.6, type: 'Action'}


let movies = {
    mname:"Avengers",
    mrating:4.3,
    mind:"Hollywood"
}
undefined
movies['mname']
'Avengers'


let movies = [
    {
        mname:"Avengers",
        mrating:4.3,
        mind:"Hollywood"
    },
    {
        mname:"Jab we met",
        mrating:4.5,
        mind:"Bollywood"
    }
]

movies[1].mname
'Jab we met'


let movies = {
    mname:"Avengers",
    mrating:4.3,
    mind:"Hollywood"
}

for(key in movies) {
    console.log(key)
}

mname
mrating
mind

for(key in movies) {
    console.log(movies[key])
}

Avengers
4.3
Hollywood

