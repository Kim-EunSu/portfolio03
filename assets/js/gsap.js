gsap.registerPlugin(ScrollTrigger);

let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset",
    },
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -220,
    ease: Power2.out,
  });
  tl.from(image, 1.7, {
    xPercent: 100,
    scale: 1.5,
    // delay: -1.5,
    delay: -1.5,
    ease: Power2.out,
  });
});
