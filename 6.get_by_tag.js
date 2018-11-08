var li = document.getElementsByTagName('li')
console.log(li)
console.log(li[1])
li[1].textContent = 'Hahaha'
li[1].style.fontFamily = 'Impact'

for(var i=0; i<li.length; i++){
    li[i].style.backgroundColor = 'pink'
}