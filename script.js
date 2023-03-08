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

////////////////// Scroll to top ///////////////////////

let home = document.querySelector('#navbar')
let footer = document.querySelector('#footer');

//creating arrow button
let ScrollElem = document.createElement('div');
ScrollElem.classList.add('scrollDiv', 'flex');
ScrollElem.innerHTML = `<i class="fa fa-arrow-up arrow"></i>`

//adding element in the document after fooer
footer.after(ScrollElem);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    ScrollElem.style.display = "flex";
  } else {
    ScrollElem.style.display = "none";
  }
}

//listening click event to scroll on top
ScrollElem.addEventListener('click', function(){
    home.scrollIntoView({behavior: "smooth"})
})