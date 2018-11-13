
var newDiv = document.createElement('div')                  // create element
newDiv.className = 'halo'                                   // add class
newDiv.id = 'hi'                                            // add id
newDiv.setAttribute('style', 'color:red')                   // add attr
var newDivText = document.createTextNode('Halo Dunia!')     // create text node
newDiv.appendChild(newDivText)                              // add text to newDiv
// newDiv.append('Halo Dunia!')

console.log(newDiv)


/////////////////////////////////


var newtitle = document.createElement('h1')
newtitle.className = 'title'
newtitle.id = 'title_id'
newtitle.setAttribute('style', 'color:red')
newtitle.append('Halo Gaes!')

console.log(newtitle)


/////////////////////////////////
// add newDiv element to document!

var body = document.querySelector('body')
var h1 = document.querySelector('h1')

body.insertBefore(newDiv, h1)

newDiv.style.fontFamily = 'Impact'
newDiv.style.fontSize = '50px'