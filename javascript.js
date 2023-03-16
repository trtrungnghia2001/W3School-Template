


// let button_colors__items = document.querySelectorAll(".button-colors__item")
// let root = document.querySelector(":root")

// button_colors__items.forEach(button=>{
//     console.log(button.getAttribute("backgroundColor"))
//     button.addEventListener("click",function(){
//         root.style.setProperty('--color', button.getAttribute("backgroundColor"))
//     })
// })















let modal = document.querySelector(".modal")
let modal__header_close = document.querySelector(".modal__header-close")
let header_content_show__modal = document.querySelector(".header-content-show__modal")

header_content_show__modal.addEventListener("click",function(){
    modal.classList.add("show")
})

modal__header_close.addEventListener("click",function(){
    modal.classList.remove("show")
})


let nav = document.querySelector(".nav")
let nav_close = document.querySelector(".nav-close")
let header_bar = document.querySelector(".header-bar")

header_bar.addEventListener("click",function(){
    nav.classList.add("show")
})

nav_close.addEventListener("click",function(){
    nav.classList.remove("show")
})


let containers_content__body = document.querySelector(".containers-content__body")
let containers_content__body_close = document.querySelector(".containers-content__body-close")

containers_content__body_close.addEventListener("click",function(){
    containers_content__body.classList.add("hide")
})







































