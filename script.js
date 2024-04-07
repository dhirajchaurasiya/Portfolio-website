const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");
hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

})

var typed = new Typed(".typing-2", {
  strings: [" 👨‍💻 A Tech Enthusiast ","👨‍🎓 A Electronics Communication And Information Engineering student ", " 🚀 Aspiring Flutter Developer",""],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");

}))

