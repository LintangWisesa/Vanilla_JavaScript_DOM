var title = document.getElementById('judul')
var tombol = document.getElementById('btn')
var textbox = document.querySelector('input[type="text"]')
var ul = document.querySelector('ul')

tombol.addEventListener('click', klik)
textbox.addEventListener('keyup', enter)

function klik(){
    var newList = document.createElement('li')      // create element li
    newList.className = 'list'                      // add class
    newList.append(textbox.value)                   // add text content
    ul.appendChild(newList)                         // insert li to ul
    textbox.value = ''                              // set textbox to blank again
}

function enter(x){
    var key = x.which
    if (key == 13){
        klik()
    }
}
