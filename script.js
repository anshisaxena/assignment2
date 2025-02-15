document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".hero-title", { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    gsap.to(".hero-subtitle", { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" });
    gsap.to(".cta-button", { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2.out" });

    document.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth - e.pageX) / 50;
        const y = (window.innerHeight - e.pageY) / 50;
        document.querySelector(".hero-content").style.transform = `translate(${x}px, ${y}px)`;
    });
});
