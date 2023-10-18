let box = document.querySelector('.box')
let colors = ['red','green','blue','yellow','purple']



for(let i = 0; i < 99;i++) {
    let item = document.createElement('div')
    item.classList.add('item')
    box.append(item)
    item.addEventListener('click', () => setColor(item) )
}

function setColor(el) {
    el.style.background = randomColor()
}

function randomColor() {
    let index = Math.floor(Math.random() * colors.length )
    return colors[index]
}