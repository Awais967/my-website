// Typewriter Effect
const text = ["Web Developer", "Web Designer", "Freelancer"];
let i = 0, j = 0, current = "", isDeleting = false;

function type(){
current = text[i];
document.getElementById("typewriter").textContent = 
isDeleting ? current.substring(0, j--) : current.substring(0, j++);

if(!isDeleting && j === current.length){
isDeleting = true;
setTimeout(type,1000);
return;
}

if(isDeleting && j === 0){
isDeleting = false;
i = (i + 1) % text.length;
}

setTimeout(type,100);
}

type();

// Smooth Scroll
function scrollToSection(){
document.getElementById("services").scrollIntoView({behavior:"smooth"});
}

// Scroll Reveal
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add("active");
}
});
});

// Dark/Light Toggle
document.getElementById("themeToggle").onclick=function(){
document.body.classList.toggle("light-mode");
};