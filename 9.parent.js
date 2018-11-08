
var item = document.querySelector('.list')
console.log(item.parentNode)
item.parentNode.style.backgroundColor = 'lightblue'

console.log(item.parentNode.parentNode)

console.log(item.parentElement) // == parentNode