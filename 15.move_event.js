
var box = document.getElementById('box')

// box.addEventListener('mouseenter', inout)
// box.addEventListener('mouseover', inout)

// box.addEventListener('mouseleave', inout)
// box.addEventListener('mouseout', inout)

box.addEventListener('mousemove', inout)

function inout(e){
    console.log('EVENT: ' + e.type)
}