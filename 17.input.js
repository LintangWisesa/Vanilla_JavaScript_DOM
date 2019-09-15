var title = document.getElementById('judul')
var tombol = document.getElementById('btn')
var textbox = document.querySelector('input[type="text"]')

tombol.addEventListener('click', klik)

function klik(){
    console.log(textbox.value)
    // alert(textbox.value)
    title.textContent = textbox.value
}