
/*root*/
let root =document.querySelector(":root")

let rs = getComputedStyle(root)

let color = rs.getPropertyValue("--color")
let black = rs.getPropertyValue("--black")
let red = rs.getPropertyValue("--red")
let teal = rs.getPropertyValue("--teal")

// console.log(color, black, red, teal)
// root.style.setProperty('--color', black)
// root.style.setProperty('--color', red)
// root.style.setProperty('--color', teal)

console.log(color, black, red, teal)

document.querySelector(".button-colors__item:nth-child(1)").onclick = function(){
    root.style.setProperty('--color', black)
}
document.querySelector(".button-colors__item:nth-child(2)").onclick = function(){
    root.style.setProperty('--color', red)
}
document.querySelector(".button-colors__item:nth-child(3)").onclick = function(){
    root.style.setProperty('--color', teal)
}


//modal
let modal = document.querySelector(".modal")
let modal__header_close = document.querySelector(".modal__header-close")
let header_content_show__modal = document.querySelector(".header-content-show__modal")

header_content_show__modal.addEventListener("click",function(){
    modal.classList.add("show")
})

modal__header_close.addEventListener("click",function(){
    modal.classList.remove("show")
})


//nav
let nav = document.querySelector(".nav")
let nav_close = document.querySelector(".nav-close")
let header_bar = document.querySelector(".header-bar")

header_bar.addEventListener("click",function(){
    nav.classList.add("show")
})

nav_close.addEventListener("click",function(){
    nav.classList.remove("show")
})


//containers
let containers_content__body = document.querySelector(".containers-content__body")
let containers_content__body_close = document.querySelector(".containers-content__body-close")

containers_content__body_close.addEventListener("click",function(){
    containers_content__body.classList.add("hide")
})


//progress
let progress_bars_line__line = document.querySelector(".progress-bars-line__line")
let progress_bars__action = document.querySelector(".progress-bars__action button")


progress_bars__action.onclick = function(){

    let width = 5

    let id = setInterval(function(){
        if(width>=100){
            clearInterval(id)
        }else{
            width++;
            progress_bars_line__line.style.width = width + "%"
            progress_bars_line__line.innerHTML = width + "%"
        }
    },10)
} 














//slideshows
let slideshows__imgs = document.querySelectorAll(".slideshows__img")
let slideshows__prev = document.querySelector(".slideshows__prev")
let slideshows__next = document.querySelector(".slideshows__next")
let currentIndex = 0;

function slideshow(){

    slideshows__imgs.forEach(img=>{
        img.classList.add("hide")
    })

    if(currentIndex < 0){
        currentIndex = slideshows__imgs.length
    }

    if(currentIndex >= slideshows__imgs.length){
        currentIndex = 0
    }

    slideshows__imgs[currentIndex].classList.remove("hide")
}
slideshow()

slideshows__prev.addEventListener("click",function(){
    currentIndex--;
    slideshow()
})
slideshows__next.addEventListener("click",function(){
    currentIndex++;
    slideshow()
})


//accordions
let accordions__content_opens = document.querySelectorAll(".accordions__content-open")

accordions__content_opens.forEach(btn=>{
    btn.addEventListener("click",function(){
        let panel = this.nextElementSibling;
        this.classList.toggle("accordions__content-open-active")

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    })
})


//tabs
let tabs_content_btns = document.querySelectorAll(".tabs-content-btns button")
let tabs_content_cards = document.querySelectorAll(".tabs-content-card")

function tabs(value1 ,value2){
    tabs_content_btns.forEach(value=>{
        value.classList.remove("tabs-content-btns-active")
    })
    tabs_content_cards.forEach(value=>{
        value.classList.remove("show")
    })

    value1.classList.add("tabs-content-btns-active")

    tabs_content_cards.forEach(card=>{
        
        let arrClass = card.className

        arrClass.includes(value2)?
        card.classList.add("show"):
        card.classList.remove("show")
    })
}

document.querySelector(".defaultOpen").click()












