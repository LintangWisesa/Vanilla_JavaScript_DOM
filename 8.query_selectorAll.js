var list = document.querySelectorAll('.list')
console.log(list)
console.log(list[0])
list[0].textContent = 'Hahaha'

var listGanjil = document.querySelectorAll('.list:nth-child(odd)')
for(var i=0; i<listGanjil.length; i++){
    listGanjil[i].style.backgroundColor = 'pink'
}

var listGenap = document.querySelectorAll('.list:nth-child(even)')
for(var i=0; i<listGenap.length; i++){
    listGenap[i].style.backgroundColor = 'lightblue'
}