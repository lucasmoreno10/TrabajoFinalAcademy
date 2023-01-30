const switchButton = document.getElementById("switch");
switchButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    switchButton.classList.toggle("active")
})


document.getElementById("switch").addEventListener("click", function () {
    alert("Esta por cambiar el fondo");
});

