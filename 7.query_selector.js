var title = document.querySelector('#judul')  // ('h3') ('.class') ('#id')
title.style.border = 'ridge 5px blue'

var input = document.querySelector('input')
input.value = 'Namaku Andi'

var submit = document.querySelector('input[type="submit"]')
submit.value = 'KIRIM'

var list = document.querySelector('.list')
list.style.color = 'red'

var lastlist = document.querySelector('.list:last-child')
lastlist.style.color = 'orange'

var list2 = document.querySelector('.list:nth-child(2)')
list2.style.color = 'lightblue'