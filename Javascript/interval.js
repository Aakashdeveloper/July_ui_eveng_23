setInterval(function() {},time)


let myInterval = setInterval(function() {
    console.log(Math.random())
},3000)

myInterval

VM1525:2 0.1749222525585994
VM1525:2 0.6229843025194861
VM1525:2 0.14657468638666082
VM1525:2 0.6965957920370618
VM1525:2 0.11718255755493989
VM1525:2 0.1737592834117394

clearInterval(myInterval)

////////////////////////////////////////////////////////////////////////
setTimeout(function() {
    console.log(Math.random())
},3000)

59114
VM1572:2 0.6767641858074924