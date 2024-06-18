const openMenu = document.querySelector(".burguer")
const menu = document.querySelector(".header--menu")
const closeMenu = document.querySelector(".closeMenu")


const aboutButton = document.querySelector(".aboutButton")

const openSubMenu = document.querySelector(".servicesMenu")
const subMenu = document.querySelector(".submenu")

const main = document.querySelector("main")
const body = document.querySelector("body")

aboutButton.addEventListener("click", function(){
    const about = document.querySelector("#about")
    about.classList.add("openCloseSubmenu")
})

openMenu.addEventListener("click", function(){
    menu.classList.toggle("openCloseSubmenu")
})
closeMenu.addEventListener("click", function(){
    menu.classList.remove("openCloseSubmenu")
})
main.addEventListener("click", function(){
    subMenu.classList.remove("openCloseSubmenu")
})
window.addEventListener("scroll", function(){
    subMenu.classList.remove("openCloseSubmenu")
    menu.classList.remove("openCloseSubmenu")
})
window.addEventListener("touch", function(){
    subMenu.classList.remove("openCloseSubmenu")
})
openSubMenu.addEventListener("click", function(){
    subMenu.classList.toggle("openCloseSubmenu")
})