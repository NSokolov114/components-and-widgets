
const panels = document.querySelectorAll('.panel')
// returns all panels in an array (panels[0], ...)

panels.forEach((panel) => {
    // console.log(panel) - loop through all panels
    panel.addEventListener('click', () => {
        // console.log('123');
        removeActiveClasses();
        // function - removes active classes
        panel.classList.add('active'); 
        // adds class active on click
    })

})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}