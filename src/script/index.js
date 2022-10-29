const hamburger = document.querySelector('.mobile-nav-hamburger');
const tabs = document.querySelector('.mobile-nav-tabs');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('nav-mobile-body-active');
    tabs.classList.toggle('mobile-tab-active');
})
