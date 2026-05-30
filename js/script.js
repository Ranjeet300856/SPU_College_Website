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