var list = document.getElementsByClassName('list')
console.log(list)
console.log(list[1])
list[1].textContent = 'Hahaha'
list[1].style.fontFamily = 'Impact'

// for(var i=0; i<list.length; i++){
//     console.log(list[i].textContent)
// }

// for(var i=0; i<list.length; i++){
//     list[i].style.backgroundColor = 'pink'
// }

for(var i=0; i<list.length; i++){
    if(i % 2 == 0){
        list[i].style.backgroundColor = 'lightpink'
    } else {
        list[i].style.backgroundColor = 'lightblue'
    }
}