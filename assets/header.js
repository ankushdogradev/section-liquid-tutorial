const anim = document.getElementById("anim");
const overlay = document.getElementById("overlay");
const coll = document.getElementById("collection");
const collUl = document.getElementById("collection--ul")

anim.addEventListener("click", () => {
    anim.classList.toggle("act");
    overlay.classList.toggle("act");
});

coll.addEventListener("click", () => {
    if (collUl.style.display === "block") {
        collUl.style.display = "none";
    } else if (collUl.style.display = "none") {
        collUl.style.display = "block";
    }
})