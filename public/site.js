
$(window).scroll(function(){
    if ($ (window).scrollTop()){
        $('nav').addClass('sticky')
    } else {
        $('nav').removeClass('sticky')
    }
    
})




// function to display card

document.getElementById("menu-btn").addEventListener("click", showCard);

function showCard(){

    
    var x = document.getElementById("container-box")
    if(x.style.display === "none"){
        x.style.display ="block", x.style.transitionDelay = "1s";
    }else{
        x.style.display = "none"
    }
    console.log(x)
}












//Hamburger

// function ham() {
//     var x = document.getElementById('myLinks');
//     if(x.style.display === 'block'){
//         x.style.display = 'none';
//     } else {
//         x.style.display = 'block';

//     }
    
// }


// const header = document.querySelector('header')
// window.addEventListener('scroll', () => {
//     window.scrollY
// })

// console.log(header)

//HAMBURGER

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-menu");


hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    nav.classList.toggle("active")
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    nav.classList.remove("active")
}