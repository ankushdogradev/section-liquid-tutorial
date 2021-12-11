const anim = document.getElementById("anim");
const overlay = document.getElementById("overlay");
const coll = document.getElementById("collection");
const collUl = document.getElementById("collection--ul")

anim.addEventListener("click", () => {
    anim.classList.toggle("act");
    overlay.classList.toggle("act");
});

coll.addEventListener("click", () => {
    collUl.classList.toggle("col--act");
    console.log("HEllo")
});