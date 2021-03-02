const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
//run once to show before scroll
checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight * 0.85

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}