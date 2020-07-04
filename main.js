//Select element function
const selectElement = x => {
  return document.querySelector(x);
};
let menuToggler = selectElement(".menu-toggle");
let body = selectElement("body");
menuToggler.addEventListener("click", () => {
  body.classList.toggle("open");
});
//scroll reveal
window.sr = ScrollReveal();
sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600
});
sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600
});
sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600
});
