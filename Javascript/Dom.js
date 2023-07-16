Document Object Model
DOM

document.getElementsByTagName('h1')[0].innerText
"I'm AAKASH HANDA"
document.getElementsByTagName('h1')[0].innerText = "I am from kimo"
'I am from kimo'
document.getElementsByTagName('h1')[0].style.color="red"
'red'
document.getElementsByTagName('h1')[0].style.visibility="Hidden"
'Hidden'
document.getElementsByTagName('h1')[0].style.visibility="visible"
'visible'

document.getElementsByClassName('scroll')
HTMLCollection(5) [a.scroll, a.scroll, a.scroll, a.scroll, a.scroll]
document.getElementsByClassName('scroll')[1]
<a href=​"#youtube" class=​"scroll">​Youtube​</a>​
document.getElementsByClassName('scroll')[1].innerText
'Youtube'
document.getElementsByClassName('scroll')[1].innerText="Videos"
'Videos'