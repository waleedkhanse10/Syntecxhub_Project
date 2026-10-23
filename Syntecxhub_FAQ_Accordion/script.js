const faqItem = document.querySelectorAll('.faq-item')

faqItem.forEach((faq) => {
    const questionButton = faq.querySelector(".faq-question")

    questionButton.addEventListener("click", () => {
        faq.classList.toggle('active')
    })
})