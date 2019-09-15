var body = document.getElementById('body')
var dora = document.getElementById('dora')
body.addEventListener('keydown', key)

function key(x){
    console.log(x.which)
    // left 37    up 38    bottom 40   right 39
    if(x.which == 39){
        dora.style.transform += 'translateX(10px)'
    } else if (x.which == 37){
        dora.style.transform += 'translateX(-10px)'
    } else if (x.which == 38){
        dora.style.transform += 'translateY(-10px)'
    } else if (x.which == 40){
        dora.style.transform += 'translateY(10px)'
    } else {
        console.log('nothing')
    }
}