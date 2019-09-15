
var tombol = document.getElementById('btn')

tombol.addEventListener('click', klik)
tombol.addEventListener('dblclick', dblklik)
tombol.addEventListener('mousedown', down)
tombol.addEventListener('mouseup', up)

function klik(e){
    // console.log('Tombol ditekan!')
    // alert('Tombol ditekan!')
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.id)
    // console.log(e.target.className)
    // console.log(e.type)
    // console.log(e.clientX)
    // console.log(e.clientY)
    // console.log(e.offsetX)
    // console.log(e.offsetY)
    // console.log(e.altKey)       // true if klik & ALT is pressed
    // console.log(e.ctrlKey)      // true if klik & CTRL is pressed
    // console.log(e.shiftKey)     // true if klik & SHIFT is pressed

    document.getElementById('judul').textContent = 'Klik'
}

function dblklik(e){
    document.getElementById('judul').textContent = 'Double Klik'
}
function up(e){
    document.getElementById('judul').textContent = 'Mouse Up'
}
function down(e){
    document.getElementById('judul').textContent = 'Mouse Down'
}