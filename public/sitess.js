


$(window).scroll(function(){
    if ($ (window).scrollTop()){
        $('nav').addClass('sticky')
    } else {
        $('nav').removeClass('sticky')
    }
    
})



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

//fetching data
const apiUrl = "http://localhost:8000/comments"

// fetch(apiUrl).then(response => response.json())
// .then(data => console.log(data))



//fetch request to display the data
getComments(apiUrl)

async function getComments(url){
    const response = await fetch(apiUrl)
    const data = await response.json()

    console.log(data)
    getItems(data)
}


//displaying the data
const lists = document.querySelector('#lists')

function getItems(comments){
    lists.innerHTML = ''

    comments.forEach((comment) => {

        const {name, message} = comment
    const newList = document.createElement('li')
    newList.classList.add('cardzz')
    

    newList.innerHTML = 
    `<ul id="lists">
        <li>
        <h2>${name}</h2>
        <p>${message}</p>
        </li>
    </ul>`

    lists.appendChild(newList)

})
}



