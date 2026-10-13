const openButton = document.querySelector(".open-btn")
const overlayContainer = document.querySelector('.overlay')
const closeButton = document.querySelector('.close-btn')

openButton.addEventListener('click', () => {
    overlayContainer.classList.add("active")
})

closeButton.addEventListener('click', () => {
    overlayContainer.classList.remove("active")
})

overlayContainer.addEventListener('click', (e) => {
    if (e.target === overlayContainer) {
        overlayContainer.classList.remove('active')
    }
})
