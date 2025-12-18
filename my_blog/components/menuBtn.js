const menuBtn = document.getElementById("menuBtn");
const menuExitBtn = document.getElementById("menuExitBtn");
const menuBar = document.getElementById("menuBar");

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menuBar.classList.toggle("hidden");

})

menuExitBtn.addEventListener("click", () => {
    menuBar.classList.toggle("hidden");
})

document.addEventListener("click", (e) => {
    if(!menuBar.classList.contains("hidden")){
        if(!menuBar.contains(e.target) && !menuBtn.contains(e.target)){
            menuBar.classList.add("hidden");
        }
    }
});