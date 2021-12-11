const anim = document.getElementById("anim");

console.log("Anim: ", anim);
anim.addEventListener("click", () => {
    anim.classList.toggle("act");
    console.log("Click");
});