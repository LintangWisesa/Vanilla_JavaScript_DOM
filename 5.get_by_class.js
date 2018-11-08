var list = document.getElementsByClassName('list')
console.log(list)
console.log(list[1])
list[1].textContent = 'Hahaha'
list[1].style.fontFamily = 'Impact'

for(var i=0; i<list.length; i++){
    list[i].style.backgroundColor = 'pink'
}