/* ================= REVEAL ON SCROLL ================= */
const reveals = document.querySelectorAll(".reveal");

reveals.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.7s ease";
});

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ================= READING TIME ================= */
document.addEventListener("DOMContentLoaded", () => {
  const article = document.querySelector(".section");
  if (!article) return;

  const text = article.innerText || "";
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  const readTime = document.createElement("div");
  readTime.className = "reading-time";
  readTime.innerText = `⏱ ${minutes} min read`;

  const heading = article.querySelector("h1, h2");
  if (heading) {
    heading.insertAdjacentElement("afterend", readTime);
  }
});

/* ================= CONTACT ================= */
function sayHi() {
  alert("Thanks for visiting my learning portfolio! 👋");
}
document.getElementById("contact-btn").addEventListener("click", sayHi);