jQuery(document).ready(function($) {
  //create the slider
  $(".cd-testimonials-wrapper").flexslider({
    selector: ".cd-testimonials > li",
    animation: "slide",
    controlNav: true,
    slideshow: true,
    smoothHeight: true,
    start: function() {
      $(".cd-testimonials")
        .children("li")
        .css({
          opacity: 1,
          position: "relative"
        });
    }
  });
});

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml7 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml7 .letter",
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  })
  .add({
    targets: ".ml7",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

const wrapper = document.querySelector(".mac-wrapper");
setInterval(() => {
  console.log("restart");
  wrapper.classList.remove("start");
  setTimeout(() => {
    wrapper.classList.add("start");
  }, 50);
}, 30000);
