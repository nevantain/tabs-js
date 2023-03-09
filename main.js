const tabNav = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.content__text')

tabNav.forEach((el) => {
    el.addEventListener('click', () => {
        tabNav.forEach((tab)=>{tab.classList.remove('active');});
        el.classList.add('active');
        tabContents.forEach((content)=>{content.classList.remove('active');});
        let tabId = el.getAttribute('data-tab');
        const tabContent = document.querySelector(tabId).classList.add('active');
    })
})