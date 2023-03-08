/////////////////// HamBurger ///////////////////

let burger = document.getElementById('burger');
let navbar = document.getElementById('navbar');
let listItem = document.querySelector('.list-item');
let rightNav = document.querySelector('.rightnav');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');

burger.addEventListener('click', () => {
    navbar.classList.toggle('h-resp');
    listItem.classList.toggle('v-resp');
    rightNav.classList.toggle('v-resp');
    line1.classList.toggle('change1');
    line2.classList.toggle('change2');
    line3.classList.toggle('change3');
})