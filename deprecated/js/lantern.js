const lantern = document.getElementById("lantern");

document.addEventListener("mousemove", (e) => {
    lantern.style.left = `${e.pageX}px`;
    lantern.style.top = `${e.pageY}px`;
});