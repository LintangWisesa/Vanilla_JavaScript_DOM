
var textbox = document.querySelector('input[type="text"]')
textbox.addEventListener('keyup', input)
// textbox.addEventListener('keydown', input)

// melihat unicode suatu tombol keyboard
// function input(e){
//     var key = e.which
//     console.log(key)
// }

// mengganti konten h1 usai isi input lalu enter
function input(e){
    var key = e.which
    console.log(key)
    if(key == 13){
        var judul = document.querySelector('#judul')
        judul.textContent = textbox.value
    }
}