/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".sec1 img", { origin: "left", delay: 100 });
sr.reveal(".circle", { origin: "right", delay: 400 });
sr.reveal(".sec1_txt", { origin: "top", delay: 100 });
