function toggleMenu() {
    const navBar = document.getElementById("navLinks");
    navBar.classList.toggle("active");
}

window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#navLinks a").forEach(link => {
        link.addEventListener("click", () => {
            document.getElementById("navLinks").classList.remove("active");
        });
    });
});

window.addEventListener("DOMContentLoaded", () => {

    const gallery = document.querySelector(".Part2");
    const wrapper = document.querySelector(".scrolling-wrapper");

    if (!gallery || !wrapper) return;

    let isPaused = false;

    gallery.addEventListener("mouseenter", () => {
        wrapper.style.animationPlayState = "paused";
        isPaused = true;
    });

    gallery.addEventListener("click", () => {

        if (isPaused) {
            wrapper.style.animationPlayState = "running";
            isPaused = false;
        } else {
            wrapper.style.animationPlayState = "paused";
            isPaused = true;
        }

    });

    gallery.addEventListener("touchstart", () => {

        if (isPaused) {
            wrapper.style.animationPlayState = "running";
            isPaused = false;
        } else {
            wrapper.style.animationPlayState = "paused";
            isPaused = true;
        }

    });

});