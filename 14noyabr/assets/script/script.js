let btn = document.querySelector(".btn")
let menu = document.querySelector(".menu-click")
let shop = document.querySelector(".menu-shop-icon")
let cart = document.querySelector(".cart")
let shop_icon = document.querySelectorAll(".fa-bag-shopping")
let x = document.querySelector(".close")
let shadow = document.querySelector(".shadow")
btn.addEventListener("click",function () {
    menu.classList.toggle("menu-click")
    menu.classList.toggle("active")

    
})
for (let i = 0; i < shop_icon.length; i++) {
    shop_icon[i].addEventListener("click",function () {
        cart.classList.toggle("open")
        shadow.style.display = "block"
        
    })
    
}
x.addEventListener("click",function () {
    cart.classList.remove("open")
    shadow.style.display = "none"
    
})
shadow.addEventListener("click",function () {
    cart.classList.remove("open")
    shadow.style.display = "none"
    
})
    
