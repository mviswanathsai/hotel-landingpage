
const button = document.querySelector(".icon-hamburger");
const primary-nav = document.querySelector(".primary-nav");

button.addEventListener("click", ()=>{
primary-nav.toggleAttribute("data-visible");
})
